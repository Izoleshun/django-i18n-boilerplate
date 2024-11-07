// Module for updating dynamic text content based on data-text-id
var TextContentUpdater = (function($) {
    const textContent = {
        test_1: gettext("This is text1 from script.js"),
        test_2: gettext("This is text2 from script.js"),
        test_3: gettext("This is text3 from script.js"),
        test_4: gettext("This is text4 from script.js"),
        test_5: gettext("This is text5 from script.js"),
        test_6: gettext("This is text6 from script.js")
    };

    function updateAllTextContent() {
        $('[data-text-id]').each(function() {
            const $element = $(this);
            const textId = $element.data('text-id');

            // Check if the textId exists in textContent and update content if found
            if (textContent[textId]) {
                $element.html(textContent[textId]);
            }
        });
    }

    function initialize() {
        updateAllTextContent();
    }

    return { initialize };
})(jQuery);

// Module for handling language changes
var LanguageSwitcher = (function($) {
    function switchLanguage(languageCode, csrfToken) {
        const requestData = new FormData();
        requestData.append('csrfmiddlewaretoken', csrfToken);
        requestData.append('language', languageCode);

        $.ajax({
            type: 'POST',
            url: "/i18n/setlang/",
            data: requestData,
            processData: false,
            contentType: false,
            success: () => window.location.href = '/',
            error: (xhr, status, error) => console.error('Error changing language:', error)
        });
    }

    function bindLanguageChangeEvents() {
        $('.dropdown-item').on('click', function(event) {
            event.preventDefault();
            const languageCode = $(this).data('lang-code');
            const csrfToken = $('#embed-data').data('csrf');
            switchLanguage(languageCode, csrfToken);
        });
    }

    function initialize() {
        bindLanguageChangeEvents();
    }

    return { initialize };
})(jQuery);

// Module for generating language dropdown options
var LanguageDropdownGenerator = (function($) {

    function retrieveLanguageData($dropdownMenu) {
        console.log(JSON.parse($dropdownMenu.attr('data-languages')))
        return {
            availableLanguages: JSON.parse($dropdownMenu.attr('data-languages')),
            activeLanguageCode: $dropdownMenu.attr('data-current-language')
        };
    }

    function getActiveLanguageInfo(languages, activeLanguageCode) {
        return languages.find(language => language.code === activeLanguageCode);
    }

    function createLanguageDropdownItem(language) {
        const $listItem = $('<li></li>');
        const $anchor = $('<a></a>', {
            href: '#',
            class: 'dropdown-item',
            'data-lang-code': language.code,
            'data-lang-name': language.name_translated,
            html: `
                <img src="${language.flag_url}" alt="${language.name_translated} flag">
                <span>${language.name_translated}</span>
            `
        });

        $listItem.append($anchor);
        return $listItem;
    }

    function createActiveLanguageButton(activeLanguageInfo) {
        const languageText = gettext(activeLanguageInfo.name_local);
        const $button = $('<button></button>', {
            id: 'btn_change_lang',
            html: `
                <img src="${activeLanguageInfo.flag_url}" alt="${activeLanguageInfo.name_local} flag">
                <span>${languageText}</span>
                <span class="arrow-down"></span>
            `
        });

        $('#dropdown_lang').on('click', '#btn_change_lang', function(event) {
            event.preventDefault();
            $('#list_dropdown_lang').toggleClass('hidden');
        });

        $('#dropdown_lang').prepend($button);
    }

    function populateLanguageDropdown($dropdownMenu, languages, activeLanguageCode) {
        languages.forEach(language => {
            if (language.code !== activeLanguageCode) {
                $dropdownMenu.append(createLanguageDropdownItem(language));
            }
        });
    }

    function initializeLanguageDropdown() {
        const $dropdownMenu = $('#list_dropdown_lang');
        const { availableLanguages, activeLanguageCode } = retrieveLanguageData($dropdownMenu);

        const activeLanguageInfo = getActiveLanguageInfo(availableLanguages, activeLanguageCode);
        if (activeLanguageInfo) createActiveLanguageButton(activeLanguageInfo);

        populateLanguageDropdown($dropdownMenu, availableLanguages, activeLanguageCode);
    }

    function initialize() {
        initializeLanguageDropdown();
    }

    return { initialize };
})(jQuery);


$(document).ready(function() {
    TextContentUpdater.initialize();
    LanguageDropdownGenerator.initialize();
    LanguageSwitcher.initialize();
});