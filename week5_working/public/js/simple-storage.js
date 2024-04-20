const setStorage = (key, data) => {
    const dataAsString = JSON.stringify(data); // data = new Object()
    const encodedData = btoa(dataAsString); // {}
    localStorage.setItem(key, encodedData);
  };
  
  const getStorage = (key) => {
    const encodedData = localStorage.getItem(key);
    if (!encodedData) return "";
    const decodedData = atob(encodedData);
    return decodedData;
  };
  
  const clearStorage = () => {
    localStorage.clear();
  };
  
  const logout = () => {
    clearStorage();
    window.location.href = "/index.html";
  };
  