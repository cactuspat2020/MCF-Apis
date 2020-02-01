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

/**
 * A code for why the item is invalid for return.  Possible values:  * InvalidValues - The item was not found in a fulfillment order.  * DuplicateRequest - A fulfillment return has already been requested for this item.  * NoCompletedShipItems - The fulfillment order containing this item has not yet shipped.  * NoReturnableQuantity - All item quantity available for return has been allocated to other return items.
 */
export type InvalidItemReasonCode = 'InvalidValues' | 'DuplicateRequest' | 'NoCompletedShipItems' | 'NoReturnableQuantity';

export const InvalidItemReasonCode = {
    InvalidValues: 'InvalidValues' as InvalidItemReasonCode,
    DuplicateRequest: 'DuplicateRequest' as InvalidItemReasonCode,
    NoCompletedShipItems: 'NoCompletedShipItems' as InvalidItemReasonCode,
    NoReturnableQuantity: 'NoReturnableQuantity' as InvalidItemReasonCode
};