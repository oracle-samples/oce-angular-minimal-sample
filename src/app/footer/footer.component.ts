/**
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import { Component, Input } from '@angular/core';
import { ImageRenditions } from '../../interfaces/interfaces';

/**
 * Component for the Footer.
 *
 * This component receives all the data which it is to display.
 * @param footerRenditionURLs the rendition URLs for the image to be displayed in the footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  // variables passed into this component from another component
  // (note: these could also be referenced in the HTML)
  @Input() footerRenditionURLs: ImageRenditions;
}
