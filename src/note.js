function testLocalStorage() {
    localStorage.setItem('key', 'new value');
    var result = localStorage.getItem('key');
    localStorage.removeItem('key');
    return result;
   }
   console.log(testLocalStorage());