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
import { GetFulfillmentPreviewItemList } from './getFulfillmentPreviewItemList';
import { ShippingSpeedCategoryList } from './shippingSpeedCategoryList';

export interface GetFulfillmentPreviewRequest { 
    /**
     * The marketplace the fulfillment order is placed against.
     */
    marketplaceId?: string;
    address: Address;
    items: GetFulfillmentPreviewItemList;
    shippingSpeedCategories?: ShippingSpeedCategoryList;
    /**
     * Specifies whether to return fulfillment order previews that are for COD (Cash On Delivery).  Possible values:  true - Returns all fulfillment order previews (both for COD and not for COD).  false - Returns only fulfillment order previews that are not for COD.
     */
    includeCODFulfillmentPreview?: boolean;
    /**
     * Specifies whether to return the ScheduledDeliveryInfo response object, which contains the available delivery windows for a Scheduled Delivery. The ScheduledDeliveryInfo response object can only be returned for fulfillment order previews with ShippingSpeedCategories = ScheduledDelivery.
     */
    includeDeliveryWindows?: boolean;
}