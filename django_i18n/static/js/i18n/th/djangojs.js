

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = 0;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s \u0e08\u0e32\u0e01 %(cnt)s selected"
    ],
    "6 a.m.": "\u0e2b\u0e01\u0e42\u0e21\u0e07\u0e40\u0e0a\u0e49\u0e32",
    "6 p.m.": "\u0e2b\u0e01\u0e42\u0e21\u0e07\u0e40\u0e22\u0e47\u0e19",
    "April": "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19",
    "August": "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21",
    "Available %s": "%s\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48",
    "Cancel": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",
    "Choose": "\u0e40\u0e25\u0e37\u0e2d\u0e01",
    "Choose a Date": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19",
    "Choose a Time": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e27\u0e25\u0e32",
    "Choose a time": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e27\u0e25\u0e32",
    "Choose all": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
    "Chosen %s": "%s\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01",
    "Click to choose all %s at once.": "\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e25\u0e37\u0e2d\u0e01 %s \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e43\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27",
    "Click to remove all chosen %s at once.": "\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e2d\u0e32 %s \u0e2d\u0e2d\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e43\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27",
    "December": "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21",
    "February": "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c",
    "Filter": "\u0e15\u0e31\u0e27\u0e01\u0e23\u0e2d\u0e07",
    "Hide": "\u0e0b\u0e48\u0e2d\u0e19",
    "January": "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21",
    "July": "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21",
    "June": "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19",
    "March": "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21",
    "May": "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21",
    "Midnight": "\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",
    "Noon": "\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e27\u0e31\u0e19",
    "Note: You are %s hour ahead of server time.": [
      "\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38: \u0e40\u0e27\u0e25\u0e32\u0e04\u0e38\u0e13\u0e40\u0e23\u0e47\u0e27\u0e01\u0e27\u0e48\u0e32\u0e40\u0e27\u0e25\u0e32\u0e1a\u0e19\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e2d\u0e22\u0e39\u0e48 %s \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07."
    ],
    "Note: You are %s hour behind server time.": [
      "\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38: \u0e40\u0e27\u0e25\u0e32\u0e04\u0e38\u0e13\u0e0a\u0e49\u0e32\u0e01\u0e27\u0e48\u0e32\u0e40\u0e27\u0e25\u0e32\u0e1a\u0e19\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e2d\u0e22\u0e39\u0e48 %s \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07."
    ],
    "November": "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",
    "Now": "\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49",
    "October": "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21",
    "Remove": "\u0e25\u0e1a\u0e2d\u0e2d\u0e01",
    "Remove all": "\u0e40\u0e2d\u0e32\u0e2d\u0e2d\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
    "September": "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19",
    "Show": "\u0e41\u0e2a\u0e14\u0e07",
    "This is text1 from script.js": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d text1 \u0e08\u0e32\u0e01 script.js",
    "This is text2 from script.js": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d text2 \u0e08\u0e32\u0e01 script.js",
    "This is text3 from script.js": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d text3 \u0e08\u0e32\u0e01 script.js",
    "This is text4 from script.js": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d text4 \u0e08\u0e32\u0e01 script.js",
    "This is text5 from script.js": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d text5 \u0e08\u0e32\u0e01 script.js",
    "This is text6 from script.js": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d text6 \u0e08\u0e32\u0e01 script.js",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e02\u0e2d\u0e07 %s \u0e04\u0e38\u0e13\u0e2d\u0e32\u0e08\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1a\u0e32\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e27\u0e49\u0e43\u0e19\u0e01\u0e25\u0e48\u0e2d\u0e07\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e41\u0e25\u0e49\u0e27\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e21 \"\u0e40\u0e25\u0e37\u0e2d\u0e01\" \u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2a\u0e2d\u0e07\u0e01\u0e25\u0e48\u0e2d\u0e07",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e02\u0e2d\u0e07 %s \u0e04\u0e38\u0e13\u0e2d\u0e32\u0e08\u0e40\u0e2d\u0e32\u0e1a\u0e32\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e27\u0e49\u0e43\u0e19\u0e01\u0e25\u0e48\u0e2d\u0e07\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e41\u0e25\u0e49\u0e27\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e21 \"\u0e40\u0e2d\u0e32\u0e2d\u0e2d\u0e01\" \u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2a\u0e2d\u0e07\u0e01\u0e25\u0e48\u0e2d\u0e07",
    "Today": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
    "Tomorrow": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49",
    "Type into this box to filter down the list of available %s.": "\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e25\u0e07\u0e43\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e23\u0e2d\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e02\u0e2d\u0e07 %s",
    "Yesterday": "\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e41\u0e25\u0e30\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e17\u0e33\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e43\u0e14 \u0e46 \u0e43\u0e19\u0e1f\u0e34\u0e25\u0e14\u0e4c \u0e04\u0e38\u0e13\u0e2d\u0e32\u0e08\u0e21\u0e2d\u0e07\u0e2b\u0e32\u0e1b\u0e38\u0e48\u0e21\u0e44\u0e1b\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e1b\u0e38\u0e48\u0e21\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 \u0e41\u0e15\u0e48\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c \u0e01\u0e23\u0e38\u0e13\u0e32\u0e04\u0e25\u0e34\u0e01 OK \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 \u0e04\u0e38\u0e13\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e43\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e1f\u0e34\u0e25\u0e14\u0e4c \u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e2b\u0e32\u0e22\u0e44\u0e1b",
    "one letter Friday\u0004F": "\u0e28.",
    "one letter Monday\u0004M": "\u0e08.",
    "one letter Saturday\u0004S": "\u0e2a.",
    "one letter Sunday\u0004S": "\u0e2d\u0e32.",
    "one letter Thursday\u0004T": "\u0e1e\u0e24.",
    "one letter Tuesday\u0004T": "\u0e2d.",
    "one letter Wednesday\u0004W": "\u0e1e."
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y, G:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d %b %Y",
      "%d %B %Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j M Y, G:i",
    "SHORT_DATE_FORMAT": "j M Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "G:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

