const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await response.json()
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);   
    }   
}

const foundUsers = async () => {
    const users = await getData();
    users.map(user => {
        const userData = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: user.address.street
        }
        console.log(userData);
    })
}  

foundUsers();