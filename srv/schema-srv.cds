using { usando as my } from '../db/schema';

service MyService {

    entity Orders as projection on my.Orders;
    entity justTest as projection on my.justTest;

}