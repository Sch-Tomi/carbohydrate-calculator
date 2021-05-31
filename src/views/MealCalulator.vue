<template>
    <CCard>
        <CCardHeader>
            <h2>Készétel Kalkulátor</h2>
        </CCardHeader>
        <CCardBody>
            <CRow>
                <CCol>
                    <CAlert color="info">
                        Itt tudod kiszámolni egy étel CH tartalmát. Csak vedd fel a + ikonnal az
                        alapanyogat és add meg az adataikat.
                    </CAlert>
                </CCol>
            </CRow>
            <div class="list">
                <CRow class="listItem flex-column" v-for="item in items" :key="item.id">
                    <CCol col="12 pb-3">
                        <CRow>
                            <CCol col="4 verticalCenter"> <label>Számolós?</label> </CCol>
                            <CCol col="8 verticalCenter justify-content-end">
                                <CSwitch
                                    class=" float-right"
                                    label="Számolós?"
                                    :checked="item.calculable"
                                    color="success"
                                    shape="pill"
                                    @update:checked="
                                        value => itemAttrChange('calculable', item.id, value)
                                    "
                                    horizontal
                                />
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol col="12 pb-3">
                        <CRow>
                            <CCol col="4 verticalCenter"><label>Alapanyag</label></CCol>
                            <CCol col="8 verticalCenter">
                                <CInput
                                    class="w-100"
                                    placeholder="Add meg a nevét"
                                    :value="item.name"
                                    @input="itemAttrChange('name', item.id, $event)"
                            /></CCol>
                        </CRow>
                    </CCol>
                    <CCol col="12 pb-3">
                        <CRow>
                            <CCol col="4 verticalCenter"><label>Súlya</label></CCol>
                            <CCol col="8 verticalCenter">
                                <CInput
                                    class="w-100"
                                    placeholder="Add meg a súlyát"
                                    :value="item.weight"
                                    @input="itemAttrChange('weight', item.id, $event)"
                                    append="g"
                            /></CCol>
                        </CRow>
                    </CCol>
                    <CCol col="12 pb-3">
                        <CRow>
                            <CCol col="4 verticalCenter">
                                <label>CH tartalma</label>
                                <CBadge v-c-tooltip="'100g termékben'" color="info" shape="pill">
                                    i
                                </CBadge>
                            </CCol>
                            <CCol col="8 verticalCenter">
                                <CInput
                                    class="w-100"
                                    placeholder="Add meg a CH tartalmat"
                                    :value="item.referenceCH"
                                    @input="itemAttrChange('referenceCH', item.id, $event)"
                                    append="g"
                                />
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol col="12 pb-3">
                        <CRow>
                            <CCol col="4 verticalCenter"><label>Összes CH tartalma</label></CCol>
                            <CCol col="8 verticalCenter">
                                <CInput
                                    class="w-100"
                                    placeholder=""
                                    :value="item.sumCH"
                                    append="g"
                                />
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol col="12">
                        <CButton
                            :color="'danger'"
                            class="m-2 float-right"
                            shape="pill"
                            @click="deleteItem(item)"
                        >
                            <CIcon name="cilTrash" />
                        </CButton>
                    </CCol>
                </CRow>
            </div>

            <CRow class="summarize w-100">
                <CCol>
                    <CCallout color="info">
                        <small class="text-muted">Összes CH: </small><br />
                        <strong class="h4">{{ mealCH }} g</strong>
                    </CCallout>
                </CCol>
                <CCol class="col-6 verticalCenter justify-content-end">
                    <CButton :color="'success'" class="m-2 float-right" @click="addItem">
                        +
                    </CButton>
                </CCol>
            </CRow>
        </CCardBody>
    </CCard>
</template>

<script>
import { Item } from "@/models";

export default {
    name: "MealCalculator",
    data() {
        return {
            fields: [
                {
                    key: "calculable",
                    label: "Számolós?"
                },
                {
                    key: "name",
                    label: "Alapanyag"
                },
                {
                    key: "weight",
                    label: "Súlya"
                },
                {
                    key: "referenceCH",
                    label: "CH/x g"
                },
                {
                    key: "sumCH",
                    label: "CH összesen"
                }
            ]
        };
    },
    computed: {
        items() {
            return Item.all();
        },
        mealCH() {
            return Item.query()
                .where("calculable", true)
                .get()
                .reduce((accumulator, item) => accumulator + item.sumCH, 0);
        }
    },
    methods: {
        addItem() {
            Item.insert({ data: { calculable: true, weight: "", referenceCH: "" } });
        },

        itemAttrChange(attr, id, value) {
            Item.update({
                where: id,
                data: {
                    [attr]: value
                }
            });
        },
        deleteItem(item) {
            Item.delete(item.id);
        }
    }
};
</script>

<style>
.verticalCenter {
    display: flex;
    align-items: center;
}

label {
    display: initial;
    margin: 0;
}

.form-group {
    margin: 0;
}

.listItem {
    padding: 15px;
    border-bottom: 1px solid #bbbbbb;
}

.listItem:last-of-type {
    border-bottom: none;
}

.listItem:nth-child(even) {
    background-color: #f2f2f2;
}

.summarize{
    margin-top: 10px;
    border-top: 4px double  #bbbbbb;
}
</style>
