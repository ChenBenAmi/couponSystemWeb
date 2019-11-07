import { Coupon } from './coupon';
import { Income } from './income';

export class Company {
    id: number;
    companyName: string;
    password: string;
    couponsCollection:Map<number,Coupon>
    incomeCollection:Map<number,Income>
    email: string;
}
