import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bookingDetails = JSON.parse(localStorage.getItem('bookingDetails')||'{}')
  flightDetails = JSON.parse(localStorage.getItem('flightData')||'{}')
  discount = this.flightDetails.fare*0.05
  total = this.flightDetails.fare*0.95
  status:any

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods:[
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification:{
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          } 
        }
      }
    ],
    merchantInfo:{
      merchantId: '12345678901234567890',
      merchantName: 'Flight Booking'
    },
    transactionInfo:{
      totalPriceStatus:'FINAL',
      totalPriceLabel:'Total payment',
      totalPrice: '5000.00',
      currencyCode: 'INR',
      countryCode: 'IN'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']

  };

  onLoadPaymentData = ( event: Event):void => {
    const eventDetail= event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load data', eventDetail.detail);
    if (status="SUCCESS"){
      console.log(status);
      this.router.navigate(['/confirm'])
    }
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (paymentData) =>{
    console.log('payment authorized', paymentData);
    this.status = 'SUCCESS'
    return {
      transactionState: 'SUCCESS'
    };
  }

  onError = (event:ErrorEvent):void =>{
    console.error('error', event.error);
  }

  constructor(private flight:FlightService, private router:Router) { }

  ngOnInit(): void {
  }
 options = {
    "key": "rzp_test_GolVACau1VZfCl",
    "amount": "50000",
    "currency": "INR",
    "name": "Flight Booking", 
    "description": "",
    "image": "https://example.com/your_logo",
    "handler": function(response:any){
      alert('Success')
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

  rzp: any
pay(){  
  this.rzp =new  this.flight.nativeWindow.Razorpay(this.options)
  this.rzp.open()
}

}
