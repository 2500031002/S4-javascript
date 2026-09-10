// read the data from the mydata.json using fetch API
getdata = async () => {
    try{
        let response = await fetch("mydata.json");
        let data = await response.json();
        console.log(data)
    }
    catch(error){
        console.error("Error fetching data:", error)
    }
}
