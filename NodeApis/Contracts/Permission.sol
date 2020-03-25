pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
contract Permission {
   
    struct PatientProviderAccess {
        string[] providerName;
      
    }
    struct ProviderPatientAccess {
        string[] patienName;
    
    }
   
    mapping (string => PatientProviderAccess) PatientProviderAccessList;
    mapping (string => ProviderPatientAccess) ProviderPatientAccessList;
 
    address owner;
   
    constructor() public {
        owner = msg.sender;
    }
    string []   pNs;
 
    function togglePatientPermission(string memory patientCnic,string memory prociderID) public{
     
       PatientProviderAccess storage patientprovideraccess = PatientProviderAccessList[patientCnic];
      
       string[] memory pN=patientprovideraccess.providerName;
       uint256 len=pN.length ;
        delete   pNs;
        int change=0;
       for(uint256 i=0;i<len;i++)
       {
          if(keccak256(abi.encodePacked(patientprovideraccess.providerName[i])) != keccak256(abi.encodePacked(prociderID))){
          
               pNs.push(patientprovideraccess.providerName[i]);
           }
           else{
               change=1;
           }
       }
      
       if(change==0)
       {
           pNs.push(prociderID);
       }
      
    
       patientprovideraccess.providerName=pNs;
       toggleProviderPermission(patientCnic,prociderID);
      
    }
   
    function getPatientPermissionList(string memory PatientCNIC ) public view returns(string  memory ){
 
        string memory str="[";
       
           uint256 len=PatientProviderAccessList[PatientCNIC].providerName.length ;
            str= string(abi.encodePacked(str,'{"provider_email":"',PatientProviderAccessList[PatientCNIC].providerName[0]));
           
           for(uint256 i=1;i<len;i++)
           {
               str= string(abi.encodePacked(str,'"},{"provider_email":"',PatientProviderAccessList[PatientCNIC].providerName[i]));
           }
          
            str= string(abi.encodePacked(str,'"}]'));
         return (str);
      
    }
   
      function toggleProviderPermission(string memory patientCnic,string memory prociderID) public{
     
       ProviderPatientAccess storage providerpatientaccess = ProviderPatientAccessList[prociderID];
      
       string[] memory pN=providerpatientaccess.patienName;
       uint256 len=pN.length ;
        delete   pNs;
        int change=0;
       for(uint256 i=0;i<len;i++)
       {
          if(keccak256(abi.encodePacked(providerpatientaccess.patienName[i])) != keccak256(abi.encodePacked(patientCnic))){
          
               pNs.push(providerpatientaccess.patienName[i]);
           }
           else{
               change=1;
           }
       }
      
       if(change==0)
       {
           pNs.push(patientCnic);
       }
      
     
       providerpatientaccess.patienName=pNs;
      
    }
   
    function getProviderPermissionList(string memory prociderID ) public view returns(string memory ){
          string memory str="[";
       
           uint256 len=ProviderPatientAccessList[prociderID].patienName.length ;
            str= string(abi.encodePacked(str,'{"patient_cnic":"',ProviderPatientAccessList[prociderID].patienName[0]));
           
           for(uint256 i=1;i<len;i++)
           {
               str= string(abi.encodePacked(str,'"},{"patient_cnic":"',ProviderPatientAccessList[prociderID].patienName[i]));


           }
          
            str= string(abi.encodePacked(str,'"}]'));
         return (str);
 
       
    }
   
   
} 
