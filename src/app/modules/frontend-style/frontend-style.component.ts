import { Component, OnInit } from '@angular/core';

// Model
import { CityWeatherModel } from '../../model/city-weather-model';
import { PokemonModel } from '../../model/pokemon-model';
import { PokemonDetailModel } from '../../model/pokemon-detail-model';
// Services
import { OpenweatherServiceService } from '../../services/openweather-service.service';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-frontend-style',
  templateUrl: './frontend-style.component.html',
  styleUrls: ['./frontend-style.component.scss']
})
export class FrontendStyleComponent implements OnInit {

  // Page Variables
  city: string | any;  
  wearther: CityWeatherModel | any;
  pokemons: PokemonModel[] | any;
  pokemon: PokemonModel | any;
  pokemonDetail: PokemonDetailModel | any;
  typePokemon: string | any;
  imagePokemon: string | any;
  isCityLoad: boolean = false;

  constructor(private openweatherService: OpenweatherServiceService,
              private pokemonService: PokemonServiceService) { }

  ngOnInit(): void {}

  /**
   * Function responsible for call weather api and load pokemons based in the pokemon type 
   * according the temperature in the city
   */
  public getPokemonsByCityTemperature() {
    this.openweatherService.getWeatherByCityName(this.city).subscribe(data => {
      this.wearther = data as CityWeatherModel;      
      this.pokemonService.getPokemonByType(this.getPokemonType(this.wearther.main.temp)).subscribe(data => {
        this.pokemons = data.pokemon;
        this.loadPokemonImage();
      });
    });
  }

  /**
   * Function responsible for get the type of pokemon based in temperature
   * @param temp 
   * @returns 
   */
  private getPokemonType(temp: number): string {
    this.typePokemon = 'electric';
    // TODO Work here to made it better... not use if
    if(temp < 5) {
      this.typePokemon = 'ice';
    } else if(temp >= 5 && temp < 10) {
      this.typePokemon = 'water';
    } else if(temp >= 12 && temp < 15) {
      this.typePokemon = 'grass';
    } else if(temp >= 15 && temp < 21) {
      this.typePokemon = 'ground';
    } else if(temp >= 23 && temp < 27) {
      this.typePokemon = 'bug';
    } else if(temp >= 27 && temp < 33) {
      this.typePokemon = 'rock';
    } else if(temp >= 33) {
      this.typePokemon = 'fire';
    }
    return this.typePokemon;
  }

  /**
   * Function responsible for load the image of one of the pokemons in the array
   */
  public loadPokemonImage() {
    const indexRandom = Math.floor(Math.random() * (this.pokemons.length - 0 + 1) + 0);
    this.pokemon = this.pokemons[indexRandom];
    this.pokemonService.getPokemonImageByUrl(this.pokemon.pokemon.url).subscribe(data => {
      this.pokemonDetail = data as PokemonDetailModel;
      this.imagePokemon = this.pokemonDetail.sprites.other.home.front_default;
      this.isCityLoad = true;
      /**
      - Temperatura atual da cidade em graus Celcius;
      - Se está chovendo ou não;
      - Nome do Pokémon seguindo as regras acima.
      */
      console.log('Temperature in ' + this.city + 'is ' + this.wearther.main.temp + '°C');
      console.log('In ' + this.city + ' at this moment is ' + this.wearther.weather[0].main);
      console.log('The Pokemon name is ' + this.pokemon.pokemon.name + ' of the tyype ' + this.typePokemon);
      console.log('The image of the pokemon is ' + this.imagePokemon);
    });
  }

  /**
   * Function responsible for clean the result and enable for insert another city
   */
  public clearResult() {
    this.city = null;
    this.isCityLoad = false;
  }

}
