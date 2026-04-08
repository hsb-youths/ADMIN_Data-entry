const adminCredentials = [
    { username: 'Binty', password: 'pass1' },
    { username: 'Dhaka1', password: 'pass2' },
    { username: 'HSB', password: 'pass3' },
    { username: 'abonty', password: 'pass4' }
  ];
  
  function isValidCredentials(username, password) {
    return adminCredentials.some(cred => cred.username === username && cred.password === password);
  }