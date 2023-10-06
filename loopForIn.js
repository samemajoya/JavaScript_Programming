for (let key in car) {
    if (key === 'model') {
      console.log(`Breaking at key: ${key}`);
      break;
    }
    console.log(`${key}: ${car[key]}`);
  }