pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
//import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract MedicalEncounter {
   
   
    struct MedicalEnconterStruct {
        uint[] uid;
        string[] heathcare_professional;
        string[] encounter_time;
        address[] Patient;
        string[] details;
        string[] enc_time;
        address[] provider;
        string JSON_Data;
    }
   
    mapping (string => MedicalEnconterStruct) private MedicalEncounters;
    string[] private PatientCNIC;
    address private owner;
  
   uint index = 0;
    constructor() public {
        owner = msg.sender;
    }
    
    // function uint2str(uint i) internal pure returns (string memory){ 
    //     if (i == 0) return "0"; 
    //     uint j = i; uint length; 
    //     while (j != 0){ 
    //         length++; j /= 10; 
            
    //     } 
    //     bytes memory bstr = new bytes(length); 
    //     uint k = length - 1; 
    //     while (i != 0){ 
    //         // bstr[k--] = byte(48 + i % 10); i /= 10; 
    //         bstr[k--] = byte(uint8(48 + i % 10)); 
            
    //     } 
    //     return string(bstr); 
        
    // } 
    
    function setEncounterData(string memory heathcare_professional,string memory encounter_time,string memory patientCnic,string memory details,address provider,string memory _json) public{
     
       MedicalEnconterStruct storage medicalencounter = MedicalEncounters[patientCnic];
       
        medicalencounter.heathcare_professional.push(heathcare_professional);
        medicalencounter.encounter_time.push( encounter_time);
        medicalencounter.details.push(details);
        medicalencounter.provider.push(provider);
        medicalencounter.uid.push(index);

  
        if(keccak256(abi.encodePacked(medicalencounter.JSON_Data)) == keccak256(abi.encodePacked(""))){
          // return ("true")
           medicalencounter.JSON_Data = "[";
              medicalencounter.JSON_Data = string(abi.encodePacked(medicalencounter.JSON_Data,_json));
        }else {
                    //medicalencounter.JSON_Data = medicalencounter.JSON_Data +  _json;
                    //medicalencounter.JSON_Data = medicalencounter.JSON_Data.toSlice().concat(_json.toSlice());
                    medicalencounter.JSON_Data = string(abi.encodePacked(medicalencounter.JSON_Data,",",_json));
        }
        
        // medicalencounter.JSON_Data = string(abi.encodePacked(medicalencounter.JSON_Data));
    //medicalencounter.JSON_Data = _json;
        index = index + 1;
        PatientCNIC.push(patientCnic);
    }
    function getEncounterData(string memory _PatientCNIC ) public view returns(string memory){
            
        return (string(abi.encodePacked(MedicalEncounters[_PatientCNIC].JSON_Data,"]")));
    }
    
    function getEncounterIndex(string memory _PatientCNIC ) public view returns(string memory){
        
        return (string(abi.encodePacked(MedicalEncounters[_PatientCNIC].JSON_Data,"]")));
    }
    function getIndex() public view returns(uint){
        
        return (index);
    }
    function getDataForPrescription(string memory patientCnic,string memory _time,string memory _dr_name, string memory _details) public view returns(string memory){
        MedicalEnconterStruct storage medicalencounter = MedicalEncounters[patientCnic];
        // return (medicalencounter.encounter_time[0],medicalencounter.uid.length);
        for (uint i=0; i < medicalencounter.uid.length; i++) {
            // emit LogStudentGrade(studentList[i], studentStructs[studentList[i]].grade);
            if(keccak256(abi.encodePacked(string(medicalencounter.encounter_time[i]))) == keccak256(abi.encodePacked(_time))){
                 if(keccak256(abi.encodePacked(medicalencounter.heathcare_professional[i])) == keccak256(abi.encodePacked(_dr_name))){
                    if(keccak256(abi.encodePacked(medicalencounter.details[i])) == keccak256(abi.encodePacked(_details))){
                        return (string(abi.encodePacked(MedicalEncounters[patientCnic].JSON_Data,"]")));
                            
                    
                    }
                    // return (medicalencounter.heathcare_professional[i],medicalencounter.uid.length);
                    
                 } 
                       
            }
        }
        // return "{\"result \": \"No encounter found\"}";
        return ("{\"result \": \"No encounter found\"}");
    }
    
    
   
    
   
}