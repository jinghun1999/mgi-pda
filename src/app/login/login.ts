import {Component, ViewChild} from '@angular/core';
//import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';

import {Api, User} from '../../providers';
import { HomePage, BaseUI } from '../';
// import {Storage} from "@ionic/storage";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage extends BaseUI{
  // @ViewChild('userName') usernameInput;
  // //workshops: any[] = [];
  // version: string;
  // workshop: string;
  // account: { name: string, password: string } = {
  //   name: '',
  //   password: ''
  // };

  // constructor(public navCtrl: NavController,
  //             //private storage: Storage,
  //   public user: User,
  //   public toastCtrl: ToastController,
  //   public loadingCtrl: LoadingController,
  //             public api: Api) {
  //   super();
  //   this.version = this.api.version;
  // }

  // ionViewDidLoad() {
  //   this.setFocus();
  //   /*let loading = super.showLoading(this.loadingCtrl, "正在加载数据...");
  //   setTimeout(() => {
  //     this.api.get('system/getPlants', {plant: this.api.plant}).subscribe((res: any) => {
  //         loading.dismiss();
  //         if (res.successful) {
  //           this.workshops = res.data;
  //         } else {
  //           super.showToast(this.toastCtrl, res.message);
  //         }
  //       },
  //       (err) => {
  //         loading.dismiss();
  //         alert(err.message);
  //       });
  //   });*/
  // }

  // doLogin() {
  //   // if (!this.workshop) {
  //   //   super.showToast(this.toastCtrl, '请选择车间');
  //   //   return;
  //   // }
  //   // this.storage.set('WORKSHOP', this.workshop).then((res) => {
  //     if(!this.account.name|| !this.account.password){
  //       super.showToast(this.toastCtrl, '请输入用户名密码');
  //       this.setFocus();
  //       return;
  //     }

  //     let loading = super.showLoading(this.loadingCtrl, "登录中...");
  //     this.user.login(this.account).subscribe((resp) => {
  //       loading.dismiss();
  //       //this.navCtrl.push(MainPage);
  //       this.navCtrl.setRoot(HomePage, {}, {
  //         animate: true,
  //         direction: 'forward'
  //       });
  //     }, (err) => {
  //       loading.dismiss();
  //       super.showToast(this.toastCtrl, '登录失败' + err);
  //     });


  //   // }).catch(() => {
  //   // });
  // }

  // setFocus=()=> {
  //   setTimeout(() => {
  //     this.usernameInput.setFocus();//为输入框设置焦点
  //   }, 150);
  // }
}
