import type { Schema, Struct } from '@strapi/strapi';

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonDropdownLink extends Struct.ComponentSchema {
  collectionName: 'components_common_dropdown_links';
  info: {
    displayName: 'Dropdown Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonHeader extends Struct.ComponentSchema {
  collectionName: 'components_common_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'common.button', false>;
    dropdownLinks: Schema.Attribute.Component<'common.dropdown-link', true>;
    links: Schema.Attribute.Component<'common.link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.button': CommonButton;
      'common.dropdown-link': CommonDropdownLink;
      'common.header': CommonHeader;
      'common.link': CommonLink;
    }
  }
}
