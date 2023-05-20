export class CustomMap {
  private googleMap: google.maps.Map;

// Add "as HTMLElement" to avoid TS error
// chua hieu constructor parameter
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    }); 
  }
}