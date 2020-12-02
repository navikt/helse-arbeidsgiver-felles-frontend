[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=navikt_helse-arbeidsgiver-felles-frontend&metric=coverage)](https://sonarcloud.io/dashboard?id=navikt_helse-arbeidsgiver-felles-frontend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=navikt_helse-arbeidsgiver-felles-frontend&metric=bugs)](https://sonarcloud.io/dashboard?id=navikt_helse-arbeidsgiver-felles-frontend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=navikt_helse-arbeidsgiver-felles-frontend&metric=code_smells)](https://sonarcloud.io/dashboard?id=navikt_helse-arbeidsgiver-felles-frontend)
![CI](https://github.com/navikt/helse-arbeidsgiver-felles-frontend/workflows/CI/badge.svg)
![Publish](https://github.com/navikt/helse-arbeidsgiver-felles-frontend/workflows/Publish/badge.svg)


# helse-arbeidsgiver-felles-frontend

Felles kode som kan deles mellom frontend applikasjonene for helse arbeidsgiver.

## Slik starter du lokalt

Last ned dependencies 

<pre>
npm install
</pre>

Kjør koden

<pre>
npm start
</pre>

## Slik lager du ny versjon

I dette repo ligger det en GitHub workflow som publiserer nye pakker til GitHubs eget pakke registry. Denne workflowen
blir kjørt dersom du pusher en commit med en label som begynner på bokstaven v. Dersom du ønsker å deploye så bumper
du versjonsnummeret i package.json, også lager du en label med tilsvarende nummer som er prefikset med bokstaven v.
Denne labelen setter du på din commit og pusher til GitHub. 

### Eksempel

package.json

<pre>"version": "0.1.2"</pre>

Git label

<pre>v0.1.2</pre>


## Henvendelser

#### For NAV-ansatte

Interne henvendelser sendes via Slack i kanalen #helse-arbeidsgiver

#### For alle andre

Eksterne henvendelser gjøres ved ved å lage en ny issue.
