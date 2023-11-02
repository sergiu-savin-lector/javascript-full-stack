const save = (key, value) => {
    try {
      const serializedData = JSON.stringify(value);
      localStorage.setItem(key, serializedData);
    } catch (err) {
      console.error(err);
    }
  }
  
  const load = (key) => {
    try {
      const serializedData = localStorage.getItem(key);
      return serializedData === null ? undefined : JSON.parse(serializedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  const clear = () => {
    localStorage.clear();
  }

  export {save, load, clear};