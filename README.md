Sure, here's the modified README file:

# README

This repository contains the files for the layout of the high pass website.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Tasks](#tasks)
- [Contributing](#contributing)
- [License](#license)

## Technologies

This project was created with the following technologies:
- gulp
- HTML
- SCSS
- JS

## Installation

To run this project, simply clone the repository:

```bash
git clone https://github.com/tushkan60/highpass-layout.git
```

## Usage

After cloning the repository, open the `index.html` file in your web browser to see the layout of the website.

## Tasks

This project includes the following Gulp tasks:

### `default`

The default task runs the following tasks in series: `clean`, `htmlInclude`, `scripts`, `styles`, `resources`, `images`, `webpImages`, `svgSprites`, and `watchFiles`.

To run the default task, use the following command:

```bash
gulp
```

### `backend`

The backend task runs the following tasks in series: `clean`, `htmlInclude`, `scriptsBackend`, `stylesBackend`, `resources`, `images`, `webpImages`, and `svgSprites`.

To run the backend task, use the following command:

```bash
gulp backend
```

### `build`

The build task runs the following tasks in series: `toProd`, `clean`, `htmlInclude`, `scripts`, `styles`, `resources`, `images`, `webpImages`, `svgSprites`, and `htmlMinify`.

To run the build task, use the following command:

```bash
gulp build
```

### `cache`

The cache task runs the following tasks in series: `cache` and `rewrite`.

To run the cache task, use the following command:

```bash
gulp cache
```

### `zip`

The zip task creates a zip file of the `dist` folder.

To run the zip task, use the following command:

```bash
gulp zip
```

## Contributing

Contributions are welcome. Please open an issue or submit a pull request to suggest changes or additions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
