# APIS Endpoints

## Patient APIS
- Patient Login: http://192.168.32.134:3639/patient/login?username=42101&password=123

- Patient Sign-up: http://192.168.32.134:3639/patient/signup?fname=soman&pat_address=a-301&city=khi&country=pak&weight=40kg&height=5ft&cnic=42101&dob=2nd sept 1996&email=baqai@baqai.com&password=123

## Provider APIS

- Provider Login: http://192.168.32.134:3639/provider/login?username=saify@saify.com&password=123

- Provider Sign-up: http://192.168.32.134:3639/provider/signup?fname=saifee&prov_address=a-301&city=khi&country=pak&prov_type=lab&email=saify@saify.com&password=123

## Encounter APIS

- Add Encounter: http://192.168.32.134:3639/encounter/add?cnic=42101&dr_name=Dr. Zulfiqar&details=lungs failed

- get Encounter: http://192.168.32.134:3639/encounter/get?cnic=42101

## Prescription APIS

- Add Prescription: http://192.168.32.134:3639/prescription/add?enc_id=0&cnic=42101&dr_name=Dr. Zulfiqar&details=lungs failed&medicine={"name": "med_name", "dose": "2 daile"} || {"nam": "med_name", "dose": "3 daile"}&apt_time=1585593376261
    * Remeber: medicine={"name": "med_name", "dose": "2 daile"} || {"nam": "med_name", "dose": "3 daile"} (this is to be passed as string in this format from UI. MUST USE DOUBLE PIPE FOR MULTIPLE DATA )

- get Prescription: http://192.168.32.134:3639/prescription/get?enc_id=0

## Lab Report APIS

- Add Lab Report: http://192.168.32.134:3639/report/add?cnic=42101&apt_time=1585593376261&details=lungs failed&dr_name=Dr. Zulfiqar&report_details={"description": "description_here_1"} || {"description": "description_here_2"}&report_time={"time": "1234"} || {"time": "12345"} &report_title={"title": "title_1"} || {"title": "title_2"}
    * Remember: report_title, report_time, report_details is to be passed in the given format as string with each separated by the double pipe sign respectively

- get Lab Report: http://192.168.32.134:3639/report/get?enc_id=0


## Permission APIS
- Update Patient Permissions List: http://192.168.32.134:3639/patient_permissions_list/update?pat_cnic=42101&prov_id=12&access_level=1

- Update Provider Persmissions List: http://192.168.32.134:3639/provider_permissions_list/update?pat_cnic=42101&prov_id=12&access_level=1

- Get Patient Permissions List: http://192.168.32.134:3639/patient_permissions_list/get?pat_cnic=42101

- Get Provider Persmissions List : http://192.168.32.134:3639/provider_permissions_list/get?provider_id=12