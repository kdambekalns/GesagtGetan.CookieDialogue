# GesagtGetan.CookieDialogue

Simple cookie dialogue plugin. There's one Fusion prototype available: `GesagtGetan.CookieDialogue:Template`. This prototype include also the styles and the javascript.

| Version | Neos   |
|---------|--------|
| 2.*     | 2.*    |
| 3.*     | 3.*    |


## Installation
Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/GesagtGetan.Theme`) and run following command:
```
composer require gesagtgetan/cookiedialogue --no-update
```

To install the package under Neos 2.* you have to enter
```
composer require "gesagtgetan/cookiedialogue:^2.1" --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.


## How to set it up
In most cases, you just have to define the search query in the [Settings.yaml](Configuration/Settings.yaml) from your theme package like that:

```
GesagtGetan:
  CookieDialogue:
    findQuery: '[instanceof Your.Package:ImprintNodeType]'
```

If the plugin doesn't include the [markup](Resources/Private/Templates/CookieDialogue.html) you have to add this line of code to your document prototype:  

`YourPageObject.body.@process.addCookieDialogue = GesagtGetan.CookieDialogue:Process`

**Example:**

```
prototype(Your.Package:DocumentNodeType) {
  body {
    @process.addCookieDialogue = GesagtGetan.CookieDialogue:Process
  }
}
```

For advanced settings, take a look at the [Fusion file](Resources/Private/TypoScript/Root.ts2).
