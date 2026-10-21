<?php
/**
 * Indivoya Holidays - Fast PHP Testimonials API (GET, POST, DELETE)
 * Powered by PDO SQLite with JSON file synchronization.
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = __DIR__ . '/../src/data/testimonials.json';
$dbFile = __DIR__ . '/../src/data/testimonials.db';

// Ensure data directory exists
if (!is_dir(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0777, true);
}

// Initialize SQLite DB
try {
    $pdo = new PDO('sqlite:' . $dbFile);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    $pdo->exec('CREATE TABLE IF NOT EXISTS testimonials (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT DEFAULT "Guest Traveler",
        company TEXT DEFAULT "",
        location TEXT DEFAULT "India",
        category TEXT DEFAULT "traveler",
        rating INTEGER DEFAULT 5,
        tour_name TEXT DEFAULT "Curated India Circuit",
        review TEXT NOT NULL,
        date TEXT,
        verified INTEGER DEFAULT 1,
        avatar_color TEXT,
        created_at TEXT
    )');

    // Seed SQLite if empty and JSON exists
    $count = (int)$pdo->query('SELECT COUNT(*) FROM testimonials')->fetchColumn();
    if ($count === 0 && file_exists($dataFile)) {
        $json = json_decode(file_get_contents($dataFile), true);
        if (is_array($json)) {
            $stmt = $pdo->prepare('INSERT INTO testimonials 
                (id, name, role, company, location, category, rating, tour_name, review, date, verified, avatar_color, created_at)
                VALUES (:id, :name, :role, :company, :location, :category, :rating, :tour_name, :review, :date, :verified, :avatar_color, :created_at)');
            foreach ($json as $item) {
                $stmt->execute([
                    ':id' => $item['id'] ?? ('test-' . uniqid()),
                    ':name' => $item['name'] ?? 'Guest',
                    ':role' => $item['role'] ?? 'Traveler',
                    ':company' => $item['company'] ?? '',
                    ':location' => $item['location'] ?? 'India',
                    ':category' => $item['category'] ?? 'traveler',
                    ':rating' => (int)($item['rating'] ?? 5),
                    ':tour_name' => $item['tourName'] ?? 'India Package',
                    ':review' => $item['review'] ?? '',
                    ':date' => $item['date'] ?? date('F Y'),
                    ':verified' => !empty($item['verified']) ? 1 : 0,
                    ':avatar_color' => $item['avatarColor'] ?? 'from-emerald-600 to-teal-800',
                    ':created_at' => $item['createdAt'] ?? date('c')
                ]);
            }
        }
    }
} catch (Exception $e) {
    // If SQLite fails, fallback to JSON only
    $pdo = null;
}

$method = $_SERVER['REQUEST_METHOD'];

// Helper to write JSON sync
function syncJsonFile($pdo, $dataFile) {
    if (!$pdo) return;
    $stmt = $pdo->query('SELECT * FROM testimonials ORDER BY created_at DESC');
    $rows = $stmt->fetchAll();
    $data = array_map(function($r) {
        return [
            'id' => $r['id'],
            'name' => $r['name'],
            'role' => $r['role'],
            'company' => $r['company'],
            'location' => $r['location'],
            'category' => $r['category'],
            'rating' => (int)$r['rating'],
            'tourName' => $r['tour_name'],
            'review' => $r['review'],
            'date' => $r['date'],
            'verified' => (bool)$r['verified'],
            'avatarColor' => $r['avatar_color'],
            'createdAt' => $r['created_at']
        ];
    }, $rows);
    file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}

// GET: Return all testimonials
if ($method === 'GET') {
    if ($pdo) {
        $stmt = $pdo->query('SELECT * FROM testimonials ORDER BY created_at DESC');
        $rows = $stmt->fetchAll();
        $data = array_map(function($r) {
            return [
                'id' => $r['id'],
                'name' => $r['name'],
                'role' => $r['role'],
                'company' => $r['company'],
                'location' => $r['location'],
                'category' => $r['category'],
                'rating' => (int)$r['rating'],
                'tourName' => $r['tour_name'],
                'review' => $r['review'],
                'date' => $r['date'],
                'verified' => (bool)$r['verified'],
                'avatarColor' => $r['avatar_color'],
                'createdAt' => $r['created_at']
            ];
        }, $rows);
        echo json_encode(['success' => true, 'source' => 'sqlite', 'data' => $data]);
        exit;
    }

    if (file_exists($dataFile)) {
        $data = json_decode(file_get_contents($dataFile), true) ?: [];
        echo json_encode(['success' => true, 'source' => 'json', 'data' => $data]);
        exit;
    }

    echo json_encode(['success' => true, 'data' => []]);
    exit;
}

// POST: Add new testimonial
if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }

    if (empty($input['name']) || empty($input['review'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Reviewer name and review text are required.']);
        exit;
    }

    $colors = ['from-amber-500 to-amber-700', 'from-blue-600 to-indigo-800', 'from-emerald-600 to-teal-800', 'from-purple-600 to-violet-800'];
    $newItem = [
        'id' => 'test-' . time() . '-' . rand(100, 999),
        'name' => htmlspecialchars(substr(trim($input['name']), 0, 80)),
        'role' => htmlspecialchars(substr(trim($input['role'] ?? 'Guest Traveler'), 0, 80)),
        'company' => htmlspecialchars(substr(trim($input['company'] ?? ''), 0, 100)),
        'location' => htmlspecialchars(substr(trim($input['location'] ?? 'India'), 0, 80)),
        'category' => htmlspecialchars(substr(trim($input['category'] ?? 'traveler'), 0, 40)),
        'rating' => max(1, min(5, (int)($input['rating'] ?? 5))),
        'tourName' => htmlspecialchars(substr(trim($input['tourName'] ?? 'Curated India Tour'), 0, 120)),
        'review' => htmlspecialchars(substr(trim($input['review']), 0, 2500)),
        'date' => date('F Y'),
        'verified' => !empty($input['verified']) ? 1 : 0,
        'avatarColor' => $colors[array_rand($colors)],
        'createdAt' => date('c')
    ];

    if ($pdo) {
        $stmt = $pdo->prepare('INSERT INTO testimonials 
            (id, name, role, company, location, category, rating, tour_name, review, date, verified, avatar_color, created_at)
            VALUES (:id, :name, :role, :company, :location, :category, :rating, :tour_name, :review, :date, :verified, :avatar_color, :created_at)');
        $stmt->execute([
            ':id' => $newItem['id'],
            ':name' => $newItem['name'],
            ':role' => $newItem['role'],
            ':company' => $newItem['company'],
            ':location' => $newItem['location'],
            ':category' => $newItem['category'],
            ':rating' => $newItem['rating'],
            ':tour_name' => $newItem['tourName'],
            ':review' => $newItem['review'],
            ':date' => $newItem['date'],
            ':verified' => $newItem['verified'],
            ':avatar_color' => $newItem['avatarColor'],
            ':created_at' => $newItem['createdAt']
        ]);
        syncJsonFile($pdo, $dataFile);
    } else {
        $existing = file_exists($dataFile) ? json_decode(file_get_contents($dataFile), true) : [];
        if (!is_array($existing)) $existing = [];
        array_unshift($existing, $newItem);
        file_put_contents($dataFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }

    http_response_code(201);
    echo json_encode(['success' => true, 'message' => 'Testimonial added successfully!', 'data' => $newItem]);
    exit;
}

// DELETE: Remove testimonial
if ($method === 'DELETE') {
    $id = $_GET['id'] ?? '';
    if (empty($id)) {
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'] ?? '';
    }

    if (empty($id)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID is required to delete.']);
        exit;
    }

    if ($pdo) {
        $stmt = $pdo->prepare('DELETE FROM testimonials WHERE id = :id');
        $stmt->execute([':id' => $id]);
        syncJsonFile($pdo, $dataFile);
    } else if (file_exists($dataFile)) {
        $existing = json_decode(file_get_contents($dataFile), true) ?: [];
        $existing = array_values(array_filter($existing, function($t) use ($id) {
            return ($t['id'] ?? '') !== $id;
        }));
        file_put_contents($dataFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }

    echo json_encode(['success' => true, 'message' => 'Testimonial deleted successfully.']);
    exit;
}
