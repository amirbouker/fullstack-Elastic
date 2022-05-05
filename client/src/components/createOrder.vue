<template src="./createOrder.html"></template>

<style lang="scss" src="./style.scss"></style>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import { BadgerAccordion, BadgerAccordionItem } from "vue-badger-accordion";
export default {
  name: "searchPrice",
  data: () => ({
    toggleInfo: false,
    toggleInfo2: false,
    flightConfirmation: "",
    true: true,
    vm: this,
    components: {
      BadgerAccordion,
      BadgerAccordionItem,
    },
    form: {
      firstName: "theo",
      lastName: "vast",
      isModalVisible: false,
      gender: null,
      age: null,
      email: "abc@gmail.com",
    },
    userSaved: false,
    sending: false,
    lastUser: null,
    menuVisible: false,
    selectedCountryDeparture: "",
    selectedCountryDepartureId: "",
    countries: [],
    selectedCountryArrival: "",
    selectedCountryArrivalId: "",
    localhost: "http://localhost:8080/",
    info: {},
    info2: {},
    info3: {},
    mojsOptions: {
      count: 6,
      radius: {
        15: 100,
      },
      origin: "100% 100%",
      degree: 360,
      children: {
        shape: "polygon",
        fill: ["blue", "white"],
        isSwirl: true,
        swirlSize: 10,
        swirlFrequency: 2,
        delay: "stagger(0, 30)",
      },
    },
    selectedTravel: {},
    searchObject: "",
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      age: {
        required,
        maxLength: maxLength(3),
      },
      gender: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {},

  watch: {
    selectedTravel() {
      return window.console.log(this.selectedTravel);
    },
  },

  methods: {
    getSeletedItem(arrival = false) {
      if (arrival) {
        this.selectedCountryArrivalId = this.selectedCountryArrival.id;
        this.selectedCountryArrival = this.selectedCountryArrival.name;
      } else {
        this.selectedCountryDepartureId = this.selectedCountryDeparture.id;
        this.selectedCountryDeparture = this.selectedCountryDeparture.name;
      }
    },
    getCountriesDeparture(searchTerm) {
      //window.console.log(searchTerm);
      this.countries = new Promise((resolve) => {
        window.setTimeout(() => {
          if (!searchTerm) {
            resolve(this.countryList);
          } else {
            const term = searchTerm.toLowerCase();

            resolve(
              this.countryList?.filter(({ name }) =>
                name.toLowerCase().includes(term)
              )
            );
          }
        }, 500);
      });
    },
    searchCity(arrival = false) {
      this.showLoader(true);
      var urlSend = !arrival
        ? this.selectedCountryDeparture
        : this.selectedCountryArrival;

      // var self =this.selectedCountryDeparture
      async function postUrlEncoded() {
        const response = await fetch(
          "http://127.0.0.1:3002/api/v1/airPorts/search?q=" + urlSend,
          {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              // 'Content-Type': 'application/json'
              "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            // params: {keyword: self}// body data type must match "Content-Type" header
          }
        );
        //window.console.log(response);

        return response.json(); // parses JSON response into native JavaScript objects
      }

      postUrlEncoded().then((data) => {
        //window.console.log("déta", data);
        this.countryList = data.results;
        if (!arrival) {
          this.$store.commit("dataCitySearchMute", data.results);
        } else {
          this.$store.commit("dataCitySearchArrival", data.results);
        }
        this.showLoader(false);
      });
    },

    chooseflight() {
      const requestBody = {
        flightId: this.info2[0].id,
        fullName: "amir",
        email: "amirboouker@gmail.com",
      };

      async function postUrlEncoded(requestBody) {
        const response = await fetch(
          "http://127.0.0.1:3002/api/v1/reservations",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              //"Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(requestBody),
          }
        );
        return await response.json(); // parses JSON response into native JavaScript objects
      }

      postUrlEncoded(requestBody)
        .then((data) => {
          Swal.fire({
            icon: "success",
            title: "good",
            text: `flight booked with success
                    your flight Id ${data.id}`,
          });
        })
        .catch(function(error) {
          window.console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href>Why do I have this issue?</a>",
          });
        });
      //window.console.log(requestBody);
    },

    letsFly() {
      this.showLoader(true);
      this.info2 = "";
      let bodyDate =
        "from=" +
        this.selectedCountryDepartureId +
        "&to=" +
        this.selectedCountryArrivalId;
      //window.console.log(bodyDate);

      async function postUrlEncoded() {
        const response = await fetch(
          "http://127.0.0.1:3002/api/v1/flights/findFlight?" + bodyDate,
          {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              // 'Content-Type': 'application/json'
              "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
          }
        );
        return await response.json(); // parses JSON response into native JavaScript objects
      }

      postUrlEncoded()
        .then((data) => {
          //window.console.log(data);
          this.info2 = [data];
          this.toggleInfo = true;
          this.$store.commit("SET_FLIGHT", [data]);
          this.showLoader(false);
        })
        .catch(function(error) {
          window.console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href>Why do I have this issue?</a>",
          });
        });
    },
  },
};
</script>
