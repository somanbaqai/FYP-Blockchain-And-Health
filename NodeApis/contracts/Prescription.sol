pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
//import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract Prescription {
   
   
    struct PrescriptionStruct {
        uint uid;
        string encounter_id;
        string prec_time;
        address provider;
        // string medicine;

        string medicine_JSON_Data;
    }
   
    mapping (string => PrescriptionStruct) private PrescriptionData;
    // string[] public PatientCNIC;
    address private owner;
  
   uint private index = 0;
    constructor() public {
        owner = msg.sender;
    }
    
 
    
    function setPrescriptionrData(string memory _prec_time,string memory enc_id,address provider,string memory _json) public{
     
       PrescriptionStruct storage prescription = PrescriptionData[enc_id];
       
        // prescription.heathcare_professional.push(heathcare_professional);
        prescription.prec_time =  _prec_time;
        prescription.provider = provider;
        prescription.uid = index;
        prescription.encounter_id = enc_id;

  
        if(keccak256(abi.encodePacked(prescription.medicine_JSON_Data)) == keccak256(abi.encodePacked(""))){
          // return ("true")
            prescription.medicine_JSON_Data = "[";
            prescription.medicine_JSON_Data = string(abi.encodePacked(prescription.medicine_JSON_Data,_json));
        }else {
                    //prescription.medicine_JSON_Data = prescription.medicine_JSON_Data +  _json;
                    //prescription.medicine_JSON_Data = prescription.medicine_JSON_Data.toSlice().concat(_json.toSlice());
                    prescription.medicine_JSON_Data = string(abi.encodePacked(prescription.medicine_JSON_Data,",",_json));
        }
        
        // prescription.medicine_JSON_Data = string(abi.encodePacked(prescription.medicine_JSON_Data));
    //prescription.medicine_JSON_Data = _json;
        index = index + 1;
        // PatientCNIC.push(patientCnic);
    }
    function getPrescriptionData(string memory enc_id ) public view returns(string memory){
            
        return (string(abi.encodePacked(PrescriptionData[enc_id].medicine_JSON_Data,"]")));
    }
    
    
    // function getIndex() public view returns(uint){
        
    //     return (index);
    // }
//     function getDataForPrescription(string memory patientCnic,string memory _time,string memory _dr_name, string memory _details) public view returns(string memory){
//         PrescriptionStruct storage prescription = PrescriptionData[patientCnic];
//         // return (prescription.encounter_time[0],prescription.uid.length);
//         for (uint i=0; i < prescription.uid.length; i++) {
//             // emit LogStudentGrade(studentList[i], studentStructs[studentList[i]].grade);
//             if(keccak256(abi.encodePacked(string(prescription.encounter_time[i]))) == keccak256(abi.encodePacked(_time))){
//                  if(keccak256(abi.encodePacked(prescription.heathcare_professional[i])) == keccak256(abi.encodePacked(_dr_name))){
//                     if(keccak256(abi.encodePacked(prescription.details[i])) == keccak256(abi.encodePacked(_details))){
//                         return (string(abi.encodePacked(PrescriptionData[patientCnic].medicine_JSON_Data,"]")));
                            
                    
//                     }
//                     // return (prescription.heathcare_professional[i],prescription.uid.length);
                    
//                  } 
                       
//             }
//         }
//         // return "{\"result \": \"No encounter found\"}";
//         return ("{\"result \": \"No encounter found\"}");
//     }
    
    
// //   
    
   
}