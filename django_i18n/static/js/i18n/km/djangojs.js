

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
    "6 a.m.": "\u1798\u17c9\u17c4\u1784\u00a0\u17e6\u00a0\u1796\u17d2\u179a\u17b9\u1780",
    "Available %s": "%s \u178a\u17c2\u179b\u17a2\u17b6\u1785\u200b\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1794\u17b6\u1793",
    "Cancel": "\u179b\u1794\u17cb\u1785\u17c4\u179b",
    "Choose a time": "\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1798\u17c9\u17c4\u1784",
    "Choose all": "\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb",
    "Chosen %s": "%s \u178a\u17c2\u179b\u1794\u17b6\u1793\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f",
    "Filter": "\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1787\u17b6\u1798\u17bd\u1799",
    "First": "\u178a\u17c6\u1794\u17bc\u1784",
    "Last": "\u1785\u17bb\u1784\u1780\u17d2\u179a\u17c4\u1799",
    "Midnight": "\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",
    "Next": "\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb",
    "No data available in table": "\u1798\u17b7\u1793\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u178f\u17b6\u179a\u17b6\u1784\u1791\u17c1\u17d4",
    "No entries to show": "\u1798\u17b7\u1793\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u178f\u17b6\u179a\u17b6\u1784\u1791\u17c1\u17d4",
    "No records to display": "\u1798\u17b7\u1793\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u178f\u17b6\u179a\u17b6\u1784\u1791\u17c1\u17d4",
    "Noon": "\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c2\u178f\u17d2\u179a\u1784\u17cb",
    "Now": "\u17a5\u17a1\u17bc\u179c\u1793\u17c1\u17c7",
    "Please wait - loading...": "\u179f\u17bc\u1798\u179a\u1784\u17cb\u1785\u17b6\u17c6 - \u1780\u17c6\u1796\u17bb\u1784\u1795\u17d2\u1791\u17bb\u1780...",
    "Previous": "\u1798\u17bb\u1793",
    "Remove": "\u179b\u1794\u17cb\u1785\u17c1\u1789",
    "Search": "\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780",
    "Show": "\u1794\u1784\u17d2\u17a0\u17b6\u1789",
    "Showing ": "\u1780\u17c6\u1796\u17bb\u1784\u1794\u1784\u17d2\u17a0\u17b6\u1789",
    "This is text1 from script.js": "\u1793\u17c1\u17c7\u1782\u17ba\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 1 \u1796\u17b8 script.js",
    "This is text2 from script.js": "\u1793\u17c1\u17c7\u1782\u17ba\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 2 \u1796\u17b8 script.js",
    "This is text3 from script.js": "\u1793\u17c1\u17c7\u1782\u17ba\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 3 \u1796\u17b8 script.js",
    "This is text4 from script.js": "\u1793\u17c1\u17c7\u1782\u17ba\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 4 \u1796\u17b8 script.js",
    "This is text5 from script.js": "\u1793\u17c1\u17c7\u1782\u17ba\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 5 \u1796\u17b8 script.js",
    "This is text6 from script.js": "\u1793\u17c1\u17c7\u1782\u17ba\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 6 \u1796\u17b8 script.js",
    "Today": "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7",
    "Tomorrow": "\u1790\u17d2\u1784\u17c3\u179f\u17d2\u17a2\u17c2\u1780",
    "Yesterday": "\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789",
    "entries": "\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",
    "from ": "\u1796\u17b8 ",
    "of": "\u1793\u17c3",
    "to": "\u1791\u17c5",
    "total entries": " \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u179f\u179a\u17bb\u1794"
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
    "DATETIME_FORMAT": "j \u1781\u17c2 F \u1786\u17d2\u1793\u17b6\u17c6 Y, G:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M"
    ],
    "DATE_FORMAT": "j \u1781\u17c2 F \u1786\u17d2\u1793\u17b6\u17c6 Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "j M Y, G:i",
    "SHORT_DATE_FORMAT": "j M Y",
    "THOUSAND_SEPARATOR": ".",
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

