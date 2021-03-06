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
import { Address } from './address';
import { CODSettings } from './cODSettings';
import { DeliveryWindow } from './deliveryWindow';
import { FulfillmentAction } from './fulfillmentAction';
import { FulfillmentOrderStatus } from './fulfillmentOrderStatus';
import { FulfillmentPolicy } from './fulfillmentPolicy';
import { NotificationEmailList } from './notificationEmailList';
import { ShippingSpeedCategory } from './shippingSpeedCategory';
import { Timestamp } from './timestamp';

/**
 * General information about a fulfillment order, including its status.
 */
export interface FulfillmentOrder { 
    /**
     * The fulfillment order identifier that you created and submitted using the createFulfillmentOrder operation.
     */
    sellerFulfillmentOrderId: string;
    /**
     * The identifier for the marketplace the fulfillment order is placed against.
     */
    marketplaceId: string;
    /**
     * A fulfillment order identifier that you created when you submitted the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip.
     */
    displayableOrderId: string;
    displayableOrderDateTime: Timestamp;
    /**
     * A text block that you created when you submitted the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip.
     */
    displayableOrderComment: string;
    shippingSpeedCategory: ShippingSpeedCategory;
    deliveryWindow?: DeliveryWindow;
    destinationAddress: Address;
    fulfillmentAction?: FulfillmentAction;
    fulfillmentPolicy?: FulfillmentPolicy;
    /**
     * Indicates the intended recipient channel for the order.
     */
    fulfillmentMethod?: string;
    cODSettings?: CODSettings;
    receivedDateTime: Timestamp;
    fulfillmentOrderStatus: FulfillmentOrderStatus;
    statusUpdatedDateTime: Timestamp;
    notificationEmailList?: NotificationEmailList;
}