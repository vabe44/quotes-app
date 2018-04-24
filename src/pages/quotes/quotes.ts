import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

}
