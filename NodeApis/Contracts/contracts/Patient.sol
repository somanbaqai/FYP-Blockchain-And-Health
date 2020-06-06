pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract Patient {
    
    struct PatientData {
        uint uid;
        address acc_address;
        string fname;
        string pat_address;
        string city;
        string country;
        string weight;
        string height;
        string cnic;
        string DoB;
        string password;
        string email;
        string signup_time;
    }
    
    uint private index = 0;
    mapping (string => PatientData) private PatientsList;
    address[] private PatientsAccts;
    address private owner;
    
    // store all keys of provider mapping;
    string[] private keyArray ;

    constructor() public {

        owner = msg.sender;
    }

  
    function setPatient(string memory _fname, string memory _pat_address, string memory _city, string memory _country, string memory _weight,  string memory _height,  string memory _cnic,string memory _DoB,string memory _email,string memory _password,address _address) public{
        keyArray.push(_cnic);
        
        PatientData storage patient = PatientsList[_cnic];
        patient.fname = _fname;
        patient.pat_address = _pat_address;
        patient.city = _city;
        patient.country = _country;
        patient.weight = _weight;
        patient.height = _height;
        patient.cnic = _cnic;
        patient.DoB = _DoB;
        patient.email = _email;
        patient.password = _password;
        patient.uid = index;
        patient.acc_address = _address;
        PatientsAccts.push(_address);

        index = index + 1;
       // emit PatientSettingEvent(_fname,_age);
    }
    function getPatient(string memory _address,string memory _password) public view returns(string memory,string memory,string memory,string memory,address,uint){
        
      if(keccak256(abi.encodePacked(_password)) != keccak256(abi.encodePacked(PatientsList[_address].password))){
          // return ("true");
          
          _address = "";
        }else if(keccak256(abi.encodePacked(_address)) != keccak256(abi.encodePacked(PatientsList[_address].cnic))){
          // return ("true");
          _address = "";
        }
        
        return (PatientsList[_address].fname,PatientsList[_address].cnic,PatientsList[_address].DoB,PatientsList[_address].email,PatientsList[_address].acc_address,PatientsList[_address].uid);
    }
    
    function getPatientAddress(string memory _cnic) public view returns(address){
        

        return (PatientsList[_cnic].acc_address);
    }
    
    function getAllPatients() public view returns(PatientData[] memory ){ 
        // here address is cnic
        PatientData[] memory allPatients = new PatientData[](keyArray.length);
        for (uint i = 0; i < keyArray.length; i++){
            allPatients[i] = PatientsList[keyArray[i]];
        }
        return allPatients;
    }
     
    
}
