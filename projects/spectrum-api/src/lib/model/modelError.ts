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
 * Error response returned when the request is unsuccessful.
 */
export interface ModelError { 
    /**
     * An error code that identifies the type of error that occured.
     */
    code: string;
    /**
     * A message that describes the error condition in a human-readable form.
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     */
    details?: string;
}