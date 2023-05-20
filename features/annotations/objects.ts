const profile = {
  name1: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 25
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name1 }: { age: number; name1: string } = profile;
const { coords: { lat, lng }}: { coords: { lat: number; lng: number}} = profile;