import React from 'react';
import { Provider } from "react-redux";
import { act } from 'react-dom/test-utils';
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';
import AddMovie from './AddMovie';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { PopupProvider } from '../../../state/popupsContext';
import { Title } from '../../Title';


Enzyme.configure({
    adapter: new EnzymeAdapter()
})

const mockMovies = [{
    id: "Film1",
    title: "Title1",
    genres: ["0"],
    description: "descr1",
    runTime: "133",
    year: "2018-01-01",
},
{
    id: "Film2",
    title: "Title2",
    genres: ["3"],
    description: "descr2",
    runTime: "138",
    year: "2004-01-01",
},
{
    id: "Film2",
    title: "Title2",
    genres: ["3"],
    description: "descr2",
    runTime: "138",
    year: "2004-01-01",
}];

const mockGenres = [
    { code: "0", title: "genre 1" },
    { code: "1", title: "genre 2" }
];

const mockStore = configureMockStore([thunk]);

describe('AddMovie dialog tests', () => {
    let component;
    const store = mockStore({
        movies: { list: mockMovies },
        genres: { list: mockGenres },
        sortBy: []
    });

    const wrapper = (store, movie) => mount(
        <Provider store={store} >
            <PopupProvider>
                <AddMovie editedMovie={movie} />
            </PopupProvider>
        </Provider>
    );

    describe('Dialog mounting', () => {
        const store = mockStore({
            movies: { list: mockMovies },
            genres: { list: [] },
            sortBy: []
        });


        it("should be defined", () => {
            component = wrapper(store);
            expect(component).toBeDefined();
        });

    });

    describe('Add Movie Form', () => {
        component = wrapper(store, mockMovies[0]);
        const form = component.find("[data-test='add-movie']");

        it('should be defined', () => {
            expect(form).toBeDefined();
        });

        it('should render fields', () => {
            const fields = form.find("input").getElements();
            expect(fields.length).toEqual(5);
        });

        describe('Buttons', () => {
            const btnBlock = form.find("[data-test='action-buttons'] button");

            it('should render action buttons', () => {
                const buttons = btnBlock.getElements();
                expect(buttons.length).toEqual(2);
            });

            describe('Reset button', () => {
                const resetBtn = btnBlock.find("[type='reset']");
                const mockClose = jest.fn();


                it('should be defined', () => {
                    const resetBtnText = resetBtn.text();
                    expect(resetBtnText).toEqual('Cancel');
                });
            });

            describe('Save button', () => {
                const saveBtn = btnBlock.find("[type='submit']");

                it('should render save buttons', () => {
                    const saveBtnText = saveBtn.text();
                    expect(saveBtnText).toEqual('Save');
                });

                it('should submit on click', async () => {
                    const preventDefault = jest.fn();
                    await act(async () => form.simulate('submit', { preventDefault }));

                    expect(preventDefault).toHaveBeenCalled()
                });
            });
        });
    });

});