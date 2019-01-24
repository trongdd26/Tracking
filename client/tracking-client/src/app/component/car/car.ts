enum SimType {BEFORE = "Trả trước", AFTER = "Trả sau"};
export class Car {
	id: string;
	plateNumber: string;
	imei: string;
	sim: string;
	simType = SimType.AFTER;
	personNumber = 0;
	managerment = "";
	kindOfVehicle = "";
	kindOfActiviti = "";
	setupPosition = "";
	setupName = "";
	speedLimit = 80;
	deviceType = "";
	startDate = new Date();
	estimateDate = new Date();

	constructor(id: string, plateNumber: string){
		this.id = id;
		this.plateNumber = plateNumber;
	}

}