$recaptcha_secret = '6LcdJB4pAAAAAGXOos5MiQ9uuW70KXtY9okFQzFm';
$recaptcha_response = $_POST['g-recaptcha-response'];

$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = [
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_response,
];

$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$result = json_decode($result, true);

if ($result['success']) {
    // reCAPTCHA verification passed
} else {
    // reCAPTCHA verification failed
}
