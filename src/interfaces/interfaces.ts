/**
 * Copyright (c) 2021, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

/* eslint-disable @typescript-eslint/naming-convention */
// we are ignoring the camelCase warning for fields in RenditionURLs
// as the names are set in Content Server so we can not do anything about it

/**
 * This file contains the definitions of all the data used in this application
 */

export interface ImageRenditions {
  srcset: string;
  jpgSrcset: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  native: string;
  width: string;
  height: string;
}

export interface MinimalMain {
  headerRenditionURLs: ImageRenditions;
  footerRenditionURLs: ImageRenditions;
  fields: any;
}

export interface SectionField {
  heading: string;
  type: string;
  body: string;
  image: any;
  renditionURLs: ImageRenditions;
  actions: any;
}

export interface Section {
  fields: SectionField;
}

export interface PageField {
  sections: Section[];
}

export interface Page {
  fields: PageField;
  slug: string;
  name: string;
  hasError: boolean;
}

// -- PROXY SERVER --

// Note: the headers are optional in the HttpOptions
export interface HttpOptions {
  headers?: {} ;
}
