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
import { FulfillmentAction } from './fulfillmentAction';
import { FulfillmentPolicy } from './fulfillmentPolicy';
import { NotificationEmailList } from './notificationEmailList';
import { ShippingSpeedCategory } from './shippingSpeedCategory';
import { Timestamp } from './timestamp';
import { UpdateFulfillmentOrderItemList } from './updateFulfillmentOrderItemList';

export interface UpdateFulfillmentOrderRequest { 
    /**
     * The marketplace the fulfillment order is placed against.
     */
    marketplaceId?: string;
    /**
     * A fulfillment order identifier that you create. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that you provide to your customer. You can use the SellerFulfillmentOrderId for this value or you can specify an alternate value if you want your customer to reference an alternate order identifier.
     */
    displayableOrderId?: string;
    displayableOrderDateTime?: Timestamp;
    /**
     * Order-specific text that appears in customer-facing materials such as the outbound shipment packing slip.
     */
    displayableOrderComment?: string;
    shippingSpeedCategory?: ShippingSpeedCategory;
    destinationAddress: Address;
    fulfillmentAction?: FulfillmentAction;
    fulfillmentPolicy?: FulfillmentPolicy;
    /**
     * Indicates the intended recipient channel for the order.
     */
    fulfillmentMethod?: string;
    /**
     * The two-character country code for the country from which the fulfillment order ships. **TBD**. Must be in ISO 3166-1 alpha-2 format.
     */
    shipFromCountryCode?: string;
    notificationEmailList?: NotificationEmailList;
    items: UpdateFulfillmentOrderItemList;
}