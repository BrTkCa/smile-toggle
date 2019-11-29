<h1 align="center">Smile-Toggle</h1>
<h3 align="center"><b>Smile-Toggle is a library</b> that apply a strategy pattern that allows applications switch their behavior from a simple and external configurable source.</h3>

<p align="center">
	<a href="https://travis-ci.org/luccascosta/react-identity-component">
		<img src="https://api.travis-ci.org/luccascosta/react-identity-component.svg?branch=master" />
	</a>
</p>

# Motivation

[Martin Fowler](https://martinfowler.com/articles/feature-toggles.html)

This project is a straightforward Javascript implementation of the Strategy Pattern introduced by Margin Fowler. It aims to empower an Javascript architeture to the use of Feature Toggles easily and standardized.

# Getting started
The first step is to install the library:

    npm i smile-toggle --save

## Implementation

It's only necessary to create a Feature Decision file, following the pattern:

    {
        "featureName": {
            "activated": false,
            "expiration": "2019-12-31",
            "group": "dev"
        }
    }

## Deep dive

// TODO

## Real examples

// TODO

## LICENSE

MIT License

Copyright (c) 2018 Lucas Costa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.