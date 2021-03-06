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
import { AdditionalLocationInfo } from './additionalLocationInfo';
import { CurrentStatus } from './currentStatus';
import { Timestamp } from './timestamp';
import { TrackingAddress } from './trackingAddress';
import { TrackingEventList } from './trackingEventList';

export interface PackageTrackingDetails { 
    /**
     * The package identifier.
     */
    packageNumber: number;
    /**
     * The tracking number for the package.
     */
    trackingNumber?: string;
    /**
     * The name of the carrier.
     */
    carrierCode?: string;
    /**
     * The phone number of the carrier.
     */
    carrierPhoneNumber?: string;
    /**
     * The URL of the carrier’s website.
     */
    carrierURL?: string;
    shipDate?: Timestamp;
    estimatedArrivalDate?: Timestamp;
    shipToAddress?: TrackingAddress;
    currentStatus?: CurrentStatus;
    /**
     * The name of the person who signed for the package.
     */
    signedForBy?: string;
    additionalLocationInfo?: AdditionalLocationInfo;
    trackingEvents?: TrackingEventList;
}