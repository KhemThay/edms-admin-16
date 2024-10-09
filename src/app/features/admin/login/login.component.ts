import { Component, OnInit } from '@angular/core';
import { n}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public async onLogin() {
    this.error = null
    this.loading = true

    try {
      // const user = await this.authService.logIn(this.username, this.password)
      // await this.authService.isAdmin()

      if (user) {
        const geoIp = await this.userService.getGeoIp()
        const city_name = geoIp && geoIp.city ? geoIp.city : ''
        const country_name = geoIp && geoIp.country_name ? geoIp.country_name : ''
        localStorage.setItem('ipAddress', geoIp && geoIp.ip ? geoIp.ip : '')
        localStorage.setItem('location',city_name && country_name ? city_name + ', ' + country_name : '')
      }

      this.router.navigate(['../dashboard'], {relativeTo: this.activatedRoute})
    } catch (error) {
      if( error.statusCode == 404 ) {
        SwalError.Error({ 
          title: this.translateService.instant('common.confirmation'), 
          text: 'ឈ្មោះគណនី ឬសារអេឡិចត្រូនិច និងពាក្យសម្ងាត់មិនត្រឹមត្រូវ', 
          confirmButtonText: this.translateService.instant('common.ok')
        })
      } else if (error.statusCode == 406) {
        SwalError.Error({ 
          title: this.translateService.instant('common.confirmation'), 
          text: this.translateService.instant('common.userBlocked'), 
          confirmButtonText: this.translateService.instant('common.ok')
        })
      } else {
        SwalError.Error({ 
          title: this.translateService.instant('common.confirmation'), 
          text: error.message, 
          confirmButtonText: this.translateService.instant('common.ok')
        })
      }
     
    }

    this.loading = false
  }
}
