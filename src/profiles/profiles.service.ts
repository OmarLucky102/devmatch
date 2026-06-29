import { Injectable } from '@nestjs/common';

/*enable our service class when imported and used elsewhere
 to create a new instace of it reuse an already created one
 so don't have to create new one manually*/
 
@Injectable()
export class ProfilesService {}
