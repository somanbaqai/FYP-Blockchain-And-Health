pragma solidity ^0.5.11;


contract Provier {
    
    struct ProviderData {
        uint uid;
        address patient_address;
        string fname;
        string password;
        string email;
        string prov_type;
        string prov_address;
        string city;
        string country;
        string signup_time;
    }
    uint index = 0;
    mapping (string => ProviderData) ProviderList;
    address[] public ProviderAcnts;
    address owner;
    
 
    
    constructor() public {
        owner = msg.sender;
    }

  
    function setProvider(string memory _fname, string memory _email,string memory _password, string memory _prov_type, string memory _prov_address,  string memory _city, string memory _country, string memory _signup_time, address _address) public{
        ProviderData storage provider = ProviderList[_email];
        provider.fname = _fname;

        provider.email = _email;
        provider.password = _password;
        provider.prov_type = _prov_type;
        provider.prov_address = _prov_address;
        provider.city = _city;
        provider.country = _country;
        provider.signup_time = _signup_time;
        
        provider.uid = index;
        provider.patient_address = _address;
        ProviderAcnts.push(_address);

        index = index + 1;
       // emit PatientSettingEvent(_fname,_age);
    }
    function getProvider(string memory _address,string memory _password) public view returns(string memory,string memory,string memory,string memory,address,uint){ // here address is email
        
      if(keccak256(abi.encodePacked(_password)) != keccak256(abi.encodePacked(ProviderList[_address].password))){
          // return ("true");
          _address = "";
        } else if(keccak256(abi.encodePacked(_address)) != keccak256(abi.encodePacked(ProviderList[_address].email))){
          // return ("true");
          _address = "";
        }
        
        return (ProviderList[_address].fname,ProviderList[_address].email,ProviderList[_address].prov_type,ProviderList[_address].email,ProviderList[_address].patient_address,ProviderList[_address].uid);
    }
    
    
     
    
}
