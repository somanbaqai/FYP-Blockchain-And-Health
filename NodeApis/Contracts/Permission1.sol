pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
contract Permission {
   
    // Patient to Provider Permissions List
    struct ProvidersHavingAccessToPatient {
        string[] providerName;
        string[] accessLevel;
    }
    
    // Provider to Patient Permissions List
    struct PatientsAccessibleByProvider {
        string[] patientCNIC;
        string[] accessLevel;
    }
   
    mapping (string => ProvidersHavingAccessToPatient) ListOfProvidersHavingAccessToPatients;
    mapping (string => PatientsAccessibleByProvider) ListOfPatientsAccessibleByProviders;
 
    address owner;
   
    constructor() public {
        owner = msg.sender;
    }
    
    string[] tempProviders;
    string[] tempPatients;
    string[] tempAccesses;
    
    function updatePatientPermissionsList(string memory patientCNIC, string memory providerID, string memory accessLevel) public{
     
        // Fetches list of providers that have been given access to patient's information
        ProvidersHavingAccessToPatient storage providersHavingAccessToPatient = ListOfProvidersHavingAccessToPatients[patientCNIC];
        
        // Storing list of providers having access to a patient's information in tempListOfProviders
        string[] memory tempListOfProvidersForLength = providersHavingAccessToPatient.providerName;
        uint numberOfProviders = tempListOfProvidersForLength.length;
        
        delete tempProviders;
        delete tempAccesses;
        
        int change = 0;
        
        for (uint i = 0; i < numberOfProviders; i++){
            if (keccak256(abi.encodePacked(providersHavingAccessToPatient.providerName[i])) != keccak256(abi.encodePacked(providerID))){
                
                tempProviders.push(providersHavingAccessToPatient.providerName[i]);
                tempAccesses.push(providersHavingAccessToPatient.accessLevel[i]);
                
            } 
            else {
                
                change = 1;
                
            }
        }
        
        if (change == 0 && accessLevel != 0){
            
            tempProviders.push(providerID);
            tempAccesses.push(accessLevel);
            
        }
        
        providersHavingAccessToPatient.providerName = tempProviders;
        providersHavingAccessToPatient.accessLevel = tempAccesses;
        updateProviderPermissionsList(patientCNIC, providerID, accessLevel);
      
    }

    function getPatientPermissionsList(string memory patientCNIC ) public view returns(string  memory, string memory){
        
        string memory listOfProviders="[";
        string memory listOfAccesses="[";
        
        uint256 numberOfProviders = ListOfProvidersHavingAccessToPatients[patientCNIC].providerName.length ;
           
        listOfProviders = string(abi.encodePacked(listOfProviders,'{"provider_email":"',ListOfProvidersHavingAccessToPatients[patientCNIC].providerName[0]));
        listOfAccesses = string(abi.encodePacked(listOfAccesses,'{"provider_access":"',ListOfProvidersHavingAccessToPatients[patientCNIC].accessLevel[0]));
        
        for(uint256 i=1; i < numberOfProviders; i++)
        {
            listOfProviders = string(abi.encodePacked(listOfProviders,'"},{"provider_email":"',ListOfProvidersHavingAccessToPatients[patientCNIC].providerName[i]));
            listOfAccesses = string(abi.encodePacked(listOfAccesses,'{"provider_access":"',ListOfProvidersHavingAccessToPatients[patientCNIC].accessLevel[i]));
        }
        
        listOfProviders = string(abi.encodePacked(listOfProviders,'"}]'));
        return (listOfProviders, listOfAccesses);
        
    }

    function updateProviderPermissionsList(string memory patientCNIC, string memory providerID, string memory accessLevel) public{
     
        // Fetches list of providers that have been given access to patient's information
        PatientsAccessibleByProvider storage patientsAccessibleByProvider = ListOfPatientsAccessibleByProviders[providerID];
        
        // Storing list of providers having access to a patient's information in tempListOfProviders
        string[] memory tempListOfProvidersForLength = patientsAccessibleByProvider.patientCNIC;
        uint numberOfProviders = tempListOfProvidersForLength.length;
        
        delete tempPatients;
        delete tempAccesses;
        
        int change = 0;
        
        for (uint i = 0; i < numberOfProviders; i++){
            if (keccak256(abi.encodePacked(patientsAccessibleByProvider.patientCNIC[i])) != keccak256(abi.encodePacked(patientCNIC))){
                
                tempPatients.push(patientsAccessibleByProvider.patientCNIC[i]);
                tempAccesses.push(patientsAccessibleByProvider.accessLevel[i]);
                
            } 
            else {
                
                change = 1;
                
            }
        }
        
        if (change == 0 && keccak256(abi.encodePacked(accessLevel)) != keccak256(abi.encodePacked("0"))){
            
            tempPatients.push(patientCNIC);
            tempAccesses.push(accessLevel);
            
        }
        
        patientsAccessibleByProvider.patientCNIC = tempPatients;
        patientsAccessibleByProvider.accessLevel = tempAccesses;
      
    }
}

