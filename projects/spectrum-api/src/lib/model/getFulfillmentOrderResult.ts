/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you fulfill Multi-Channel Fulfillment orders using your inventory in Amazon's fulfillment network. You can get information on potential and existing fulfillment orders.
 *
 * OpenAPI spec version: v0
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FulfillmentOrder } from './fulfillmentOrder';
import { FulfillmentOrderItemList } from './fulfillmentOrderItemList';
import { FulfillmentShipmentList } from './fulfillmentShipmentList';
import { ReturnAuthorizationList } from './returnAuthorizationList';
import { ReturnItemList } from './returnItemList';

export interface GetFulfillmentOrderResult { 
    fulfillmentOrder: FulfillmentOrder;
    fulfillmentOrderItem: FulfillmentOrderItemList;
    fulfillmentShipment?: FulfillmentShipmentList;
    returnItemList: ReturnItemList;
    returnAuthorizationList: ReturnAuthorizationList;
}