pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
contract PermissionRequests {
   
    // Patient to Provider Permissions List
    struct ProvidersRequestingAccessToPatient {
        string[] providerName;
        string[] accessLevel;
    }
    
    // Provider to Patient Permissions List
    struct PatientsRequestedByProvider {
        string[] patientCNIC;
        string[] accessLevel;
    }
   
    mapping (string => ProvidersRequestingAccessToPatient) ListOfProvidersRequestingAccessToPatients;
    mapping (string => PatientsRequestedByProvider) ListOfPatientsRequestedByProviders;
 
    address owner;
   
    constructor() public {
        owner = msg.sender;
    }
    
    string[] tempProviders;
    string[] tempPatients;
    string[] tempAccesses;
    
    function updatePatientPermissionRequestsList(string memory patientCNIC, string memory providerID, string memory accessLevel) public{
     
        // Fetches list of providers that have been given access to patient's information
        ProvidersRequestingAccessToPatient storage providersRequestingAccessToPatient = ListOfProvidersRequestingAccessToPatients[patientCNIC];
        
        // Storing list of providers Requesting access to a patient's information in tempListOfProviders
        string[] memory tempListOfProvidersForLength = providersRequestingAccessToPatient.providerName;
        uint numberOfProviders = tempListOfProvidersForLength.length;
        
        delete tempProviders;
        delete tempAccesses;
        
        int change = 0;
        
        for (uint i = 0; i < numberOfProviders; i++){
            if (keccak256(abi.encodePacked(providersRequestingAccessToPatient.providerName[i])) != keccak256(abi.encodePacked(providerID))){
                
                tempProviders.push(providersRequestingAccessToPatient.providerName[i]);
                tempAccesses.push(providersRequestingAccessToPatient.accessLevel[i]);
                
            } 
            else {
                
                change = 1;
                
            }
        }
        
        if (change == 0 && keccak256(abi.encodePacked(accessLevel)) != keccak256(abi.encodePacked("0"))){
            
            tempProviders.push(providerID);
            tempAccesses.push(accessLevel);
            
        }
        
        providersRequestingAccessToPatient.providerName = tempProviders;
        providersRequestingAccessToPatient.accessLevel = tempAccesses;
        updateProviderPermissionRequestsList(patientCNIC, providerID, accessLevel);
      
    }

    function getPatientPermissionRequestssList(string memory patientCNIC ) public view returns(string  memory, string memory){
        
        string memory listOfProviders="[";
        string memory listOfAccesses="[";
        
        uint256 numberOfProviders = ListOfProvidersRequestingAccessToPatients[patientCNIC].providerName.length ;
           
        listOfProviders = string(abi.encodePacked(listOfProviders,'{"provider_email":"',ListOfProvidersRequestingAccessToPatients[patientCNIC].providerName[0]));
        listOfAccesses = string(abi.encodePacked(listOfAccesses,'{"provider_access":"',ListOfProvidersRequestingAccessToPatients[patientCNIC].accessLevel[0]));
        
        for(uint256 i=1; i < numberOfProviders; i++)
        {
            listOfProviders = string(abi.encodePacked(listOfProviders,'"},{"provider_email":"',ListOfProvidersRequestingAccessToPatients[patientCNIC].providerName[i]));
            listOfAccesses = string(abi.encodePacked(listOfAccesses,'"},{"provider_access":"',ListOfProvidersRequestingAccessToPatients[patientCNIC].accessLevel[i]));
        }
        
        listOfProviders = string(abi.encodePacked(listOfProviders,'"}]'));
        listOfAccesses = string(abi.encodePacked(listOfAccesses,'"}]'));
        return (listOfProviders, listOfAccesses);
        
    }
    
    function updateProviderPermissionRequestsList(string memory patientCNIC, string memory providerID, string memory accessLevel) public{
     
        // Fetches list of providers that have been given access to patient's information
        PatientsRequestedByProvider storage patientsRequestedByProvider = ListOfPatientsRequestedByProviders[providerID];
        
        // Storing list of providers Requesting access to a patient's information in tempListOfProviders
        string[] memory tempListOfProvidersForLength = patientsRequestedByProvider.patientCNIC;
        uint numberOfProviders = tempListOfProvidersForLength.length;
        
        delete tempPatients;
        delete tempAccesses;
        
        int change = 0;
        
        for (uint i = 0; i < numberOfProviders; i++){
            if (keccak256(abi.encodePacked(patientsRequestedByProvider.patientCNIC[i])) != keccak256(abi.encodePacked(patientCNIC))){
                
                tempPatients.push(patientsRequestedByProvider.patientCNIC[i]);
                tempAccesses.push(patientsRequestedByProvider.accessLevel[i]);
                
            } 
            else {
                
                change = 1;
                
            }
        }
        
        if (change == 0 && keccak256(abi.encodePacked(accessLevel)) != keccak256(abi.encodePacked("0"))){
            
            tempPatients.push(patientCNIC);
            tempAccesses.push(accessLevel);
            
        }
        
        patientsRequestedByProvider.patientCNIC = tempPatients;
        patientsRequestedByProvider.accessLevel = tempAccesses;
      
    }
    
    function getProviderPermissionRequestsList(string memory providerID ) public view returns(string  memory, string memory){
        
        string memory listOfPatients="[";
        string memory listOfAccesses="[";
        
        uint256 numberOfPatients = ListOfPatientsRequestedByProviders[providerID].patientCNIC.length ;
           
        listOfPatients = string(abi.encodePacked(listOfPatients,'{"provider_email":"',ListOfPatientsRequestedByProviders[providerID].patientCNIC[0]));
        listOfAccesses = string(abi.encodePacked(listOfAccesses,'{"provider_access":"',ListOfPatientsRequestedByProviders[providerID].accessLevel[0]));
        
        for(uint256 i=1; i < numberOfPatients; i++)
        {
            listOfPatients = string(abi.encodePacked(listOfPatients,'"},{"provider_email":"',ListOfPatientsRequestedByProviders[providerID].patientCNIC[i]));
            listOfAccesses = string(abi.encodePacked(listOfAccesses,'"},{"provider_access":"',ListOfPatientsRequestedByProviders[providerID].accessLevel[i]));
        }
        
        listOfPatients = string(abi.encodePacked(listOfPatients,'"}]'));
        listOfAccesses = string(abi.encodePacked(listOfAccesses,'"}]'));
        return (listOfPatients, listOfAccesses);
        
    }
    
}