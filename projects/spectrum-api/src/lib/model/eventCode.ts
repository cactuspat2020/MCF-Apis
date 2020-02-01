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
 * The event code for the delivery event.  Possible values:  * EVENT_101 - Carrier notified to pick up package.  * EVENT_102 - Shipment picked up from seller's facility.  * EVENT_201 - Arrival scan.  * EVENT_202 - Departure scan.  * EVENT_203 - Arrived at destination country.  * EVENT_204 - Initiated customs clearance process.  * EVENT_205 - Completed customs clearance process.  * EVENT_206 - In transit to pickup location.  * EVENT_301 - Delivered.  * EVENT_302 - Out for delivery.  * EVENT_304 - Delivery attempted.  * EVENT_306 - Customer contacted to arrange delivery.  * EVENT_307 - Delivery appointment scheduled.  * EVENT_308 - Available for pickup.  * EVENT_309 - Returned to seller.  * EVENT_401 - Held by carrier - incorrect address.  * EVENT_402 - Customs clearance delay.  * EVENT_403 - Customer moved.  * EVENT_404 - Delay in delivery due to external factors.  * EVENT_405 - Shipment damaged.  * EVENT_406 - Held by carrier.  * EVENT_407 - Customer refused delivery.  * EVENT_408 - Returning to seller.  * EVENT_409 - Lost by carrier.  * EVENT_411 - Paperwork received - did not receive shipment.  * EVENT_412 - Shipment received- did not receive paperwork.  * EVENT_413 - Held by carrier- customer refused shipment due to customs charges.  * EVENT_414 - Missorted by carrier.  * EVENT_415 - Received from prior carrier.  * EVENT_416 - Undeliverable.  * EVENT_417 - Shipment missorted.  * EVENT_418 - Shipment delayed.  * EVENT_419 - Address corrected - delivery rescheduled.
 */
export type EventCode = 'EVENT_101' | 'EVENT_102' | 'EVENT_201' | 'EVENT_202' | 'EVENT_203' | 'EVENT_204' | 'EVENT_205' | 'EVENT_206' | 'EVENT_301' | 'EVENT_302' | 'EVENT_304' | 'EVENT_306' | 'EVENT_307' | 'EVENT_308' | 'EVENT_309' | 'EVENT_401' | 'EVENT_402' | 'EVENT_403' | 'EVENT_404' | 'EVENT_405' | 'EVENT_406' | 'EVENT_407' | 'EVENT_408' | 'EVENT_409' | 'EVENT_411' | 'EVENT_412' | 'EVENT_413' | 'EVENT_414' | 'EVENT_415' | 'EVENT_416' | 'EVENT_417' | 'EVENT_418' | 'EVENT_419';

export const EventCode = {
    _101: 'EVENT_101' as EventCode,
    _102: 'EVENT_102' as EventCode,
    _201: 'EVENT_201' as EventCode,
    _202: 'EVENT_202' as EventCode,
    _203: 'EVENT_203' as EventCode,
    _204: 'EVENT_204' as EventCode,
    _205: 'EVENT_205' as EventCode,
    _206: 'EVENT_206' as EventCode,
    _301: 'EVENT_301' as EventCode,
    _302: 'EVENT_302' as EventCode,
    _304: 'EVENT_304' as EventCode,
    _306: 'EVENT_306' as EventCode,
    _307: 'EVENT_307' as EventCode,
    _308: 'EVENT_308' as EventCode,
    _309: 'EVENT_309' as EventCode,
    _401: 'EVENT_401' as EventCode,
    _402: 'EVENT_402' as EventCode,
    _403: 'EVENT_403' as EventCode,
    _404: 'EVENT_404' as EventCode,
    _405: 'EVENT_405' as EventCode,
    _406: 'EVENT_406' as EventCode,
    _407: 'EVENT_407' as EventCode,
    _408: 'EVENT_408' as EventCode,
    _409: 'EVENT_409' as EventCode,
    _411: 'EVENT_411' as EventCode,
    _412: 'EVENT_412' as EventCode,
    _413: 'EVENT_413' as EventCode,
    _414: 'EVENT_414' as EventCode,
    _415: 'EVENT_415' as EventCode,
    _416: 'EVENT_416' as EventCode,
    _417: 'EVENT_417' as EventCode,
    _418: 'EVENT_418' as EventCode,
    _419: 'EVENT_419' as EventCode
};