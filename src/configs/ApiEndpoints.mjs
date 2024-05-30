
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3080';
const API_ROUTES = {
    
    //LOGIN
    sendKeysLogin: `${API_BASE_URL}/api/datos`,
    sendTokenJwt: `${API_BASE_URL}/menu`,
    
    //MENU
    //MainModulo
    searchUser: `${API_BASE_URL}/menu/searchUser`,

    //UsersManagement 
    createUser: `${API_BASE_URL}/menu/createUsers`,
    EditUser: `${API_BASE_URL}/menu/editUsers`,
    
    //UploadDocumentation
    uploadDocument: `${API_BASE_URL}/upload`,

};

export default API_ROUTES;
