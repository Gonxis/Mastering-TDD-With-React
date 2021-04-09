import {
    checkAppTitle,
    checkBookDetail,
    checkBookListWith,
    cleanUpStubBooks,
    feedStubBooks,
    gotoApp,
    gotoNthBookInTheList,
    performSearch
} from "../../helpers";

describe('Bookish application', () => {
    beforeEach(() => {
        feedStubBooks();
        gotoApp();
    });

    afterEach(() => {
        cleanUpStubBooks();
    });

    it('Visits the bookish', () => {
        checkAppTitle();
    })

    it('Shows a book list', () => {
        checkBookListWith(['Refactoring', 'Domain-driven design', 'Building Microservices', 'Acceptance Test Driven Development with React']);
    })

    it('Goes to the detail page', () => {
        gotoNthBookInTheList(0);
        checkBookDetail();
    })

    it('Search for a title', () => {
        checkBookListWith(['Refactoring', 'Domain-driven design', 'Building Microservices', 'Acceptance Test Driven Development with React']);
        performSearch('design');
        checkBookListWith(['Domain-driven design']);
    });
})