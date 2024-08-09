import React from 'react'
import SideNav from '../Components/SideNav'
import Grid from '@mui/material/Grid';

import plasticIcon from '../assets/plasticIcon.png'
import motorIcon from '../assets/motorIcon.png'

import cartonBoxIcon from '../assets/cartonBoxIcon.png'
import magazineIcon from '../assets/magazineIcon.png'
import mixedPaperIcon from '../assets/mixedPaperIcon.png'
import newsPaperIcon from '../assets/newspaperIcon.png'
import noteBookIcon from '../assets/noteBookIcon.png'
import textBookIcon from '../assets/textBookIcon.png'

import fiberIcon from '../assets/fiberIcon.png'
import hardPlasticIcon from '../assets/hardPlasticIcon.png'
import pvcIcon from '../assets/pvcIcon.png'
import waterTankIcon from '../assets/waterTankIcon.png'

import aluminiumIcon from '../assets/aluminiumIcon.png'
import brassIcon from '../assets/brassIcon.png'
import copperIcon from '../assets/copperIcon.png'
import ironIcon from '../assets/ironIcon.png'
import ironSheetIcon from '../assets/ironSheetIcon.png'
import steelIcon from '../assets/steelIcon.png'
import tinIcon from '../assets/tinIcon.png'

import engineIcon from '../assets/engineIcon.png'
import fanIcon from '../assets/fanIcon.png'
import pumpIcon from '../assets/pumpIcon.png'

import coolerIcon from '../assets/coolerIcon.png'
import cpuIcon from '../assets/cpuIcon.png'
import inductionIcon from '../assets/inductionIcon.png'
import laptopIcon from '../assets/laptopIcon.png'
import tvIcon from '../assets/tvIcon.png'
import mobileIcon from '../assets/mobileIcon.png'
import monitorIcon from '../assets/monitorIcon.png'
import musicSystemIcon from '../assets/musicSystemIcon.png'

import fourWheelerIcon from '../assets/fourWheelerIcon.png'
import twoWheelerIcon from '../assets/twoWheelerIcon.png'

import chairIcon from '../assets/chairIcon.png'
import ropeIcon from '../assets/ropeIcon.png'
import wireIcon from '../assets/wireIcon.png'
import fishingNetIcon from '../assets/fishingNetIcon.png'
import tyreIcon from '../assets/tyreIcon.png'


function AdminItems() {
  return (
    <div className='flex justify-end' style={{ width: "100%", minHeight: "100vh" }}>
      <SideNav />
      <div style={{ minHeight: "100vh", width: "85%", backgroundColor: "#010036",paddingTop: "30px" }}>

        <Grid rowSpacing={3} container>
          {/* button row */}
          <Grid item xs={12} >
            <button className='btn btn-primary rounded ms-5'>Add Item</button>
          </Grid>
          {/* 1st row */}
          <Grid item xs={12} >
            <div>
              <h6 className='categoryHeading text-white w-auto'>PAPER</h6>
              <Grid container spacing={1}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={cartonBoxIcon} alt="Image" />
                    <h6 className='categoryName'>Carton Box</h6>
                    <p className='subCategories'>₹ 6/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={magazineIcon} alt="Image" />
                    <h6 className='categoryName'>Magazine</h6>
                    <p className='subCategories'>₹ 4/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={mixedPaperIcon} alt="Image" />
                    <h6 className='categoryName'>Mixed Pa..</h6>
                    <p className='subCategories'>₹ 2/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={newsPaperIcon} alt="Image" />
                    <h6 className='categoryName'>News Pap..</h6>
                    <p className='subCategories'>₹ 13/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={noteBookIcon} alt="Image" />
                    <h6 className='categoryName'>Note Book</h6>
                    <p className='subCategories'>₹ 12/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={textBookIcon} alt="Image" />
                    <h6 className='categoryName'>Text Book</h6>
                    <p className='subCategories'>₹ 10/kg</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* 2nd row */}
          <Grid item xs={12} >
            <div>
              <h6 className='categoryHeading  text-white w-auto'>PLASTIC</h6>
              <Grid container spacing={1}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={fiberIcon} alt="Image" />
                    <h6 className='categoryName'>Fiber</h6>
                    <p className='subCategories'>₹ 13/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={hardPlasticIcon} alt="Image" />
                    <h6 className='categoryName'>Hard Plas..</h6>
                    <p className='subCategories'>₹ 6/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={pvcIcon} alt="Image" />
                    <h6 className='categoryName'>PVC</h6>
                    <p className='subCategories'>₹ 15/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={plasticIcon} alt="Image" />
                    <h6 className='categoryName'>Soft Plastic</h6>
                    <p className='subCategories'>₹ 6/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={waterTankIcon} alt="Image" />
                    <h6 className='categoryName'>Water Tank</h6>
                    <p className='subCategories'>₹ 15/kg</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* 3rd row */}
          <Grid item xs={12} >
            <div>
              <h6 className='categoryHeading  text-white w-auto'>METALS</h6>
              <Grid container spacing={1} rowSpacing={4}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={aluminiumIcon} alt="Image" />
                    <h6 className='categoryName'>Aluminium</h6>
                    <p className='subCategories'>₹ 90/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={brassIcon} alt="Image" />
                    <h6 className='categoryName'>Brass</h6>
                    <p className='subCategories'>₹ 320/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={copperIcon} alt="Image" />
                    <h6 className='categoryName'>Copper</h6>
                    <p className='subCategories'>₹ 450/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={ironIcon} alt="Image" />
                    <h6 className='categoryName'>Iron</h6>
                    <p className='subCategories'>₹ 19/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={ironSheetIcon} alt="Image" />
                    <h6 className='categoryName'>Iron Sheets</h6>
                    <p className='subCategories'>₹ 14/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={steelIcon} alt="Image" />
                    <h6 className='categoryName'>Steel</h6>
                    <p className='subCategories'>₹ 28/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={tinIcon} alt="Image" />
                    <h6 className='categoryName'>Tin</h6>
                    <p className='subCategories'>₹ 3/kg</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* 4th row */}
          <Grid item xs={12} >
            <div>
              <h6 className='categoryHeading  text-white w-auto'>MOTOR</h6>
              <Grid container spacing={1} rowSpacing={4}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={engineIcon} alt="Image" />
                    <h6 className='categoryName'>Engine</h6>
                    <p className='subCategories'>₹ 22/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={fanIcon} alt="Image" />
                    <h6 className='categoryName'>Fan</h6>
                    <p className='subCategories'>₹ 30/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={motorIcon} alt="Image" />
                    <h6 className='categoryName'>Motor</h6>
                    <p className='subCategories'>₹ 30/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={pumpIcon} alt="Image" />
                    <h6 className='categoryName'>Pump</h6>
                    <p className='subCategories'>₹ 30/kg</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* 5th row */}
          <Grid item xs={12} >
            <div>
              <h6 className='categoryHeading  text-white w-auto'>E WASTE</h6>
              <Grid container spacing={1} rowSpacing={4}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={coolerIcon} alt="Image" />
                    <h6 className='categoryName'>Cooler</h6>
                    <p className='subCategories'>₹ 75/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={cpuIcon} alt="Image" />
                    <h6 className='categoryName'>CPU</h6>
                    <p className='subCategories'>₹ 105/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={inductionIcon} alt="Image" />
                    <h6 className='categoryName'>Induction..</h6>
                    <p className='subCategories'>₹ 10/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={laptopIcon} alt="Image" />
                    <h6 className='categoryName'>Laptop</h6>
                    <p className='subCategories'>₹ 100/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={tvIcon} alt="Image" />
                    <h6 className='categoryName'>LED TV</h6>
                    <p className='subCategories'>₹ 100/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={mobileIcon} alt="Image" />
                    <h6 className='categoryName'>Mobile</h6>
                    <p className='subCategories'>₹ 20/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={monitorIcon} alt="Image" />
                    <h6 className='categoryName'>Monitor</h6>
                    <p className='subCategories'>₹ 20/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={musicSystemIcon} alt="Image" />
                    <h6 className='categoryName'>Music Sys..</h6>
                    <p className='subCategories'>₹ 75/Pcs</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* 6th row */}
          <Grid item xs={12} >
            <div>
              <h6 className='categoryHeading  text-white w-auto'>VEHICLE</h6>
              <Grid container spacing={1} rowSpacing={4}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={twoWheelerIcon} alt="Image" />
                    <h6 className='categoryName'>Two whe..</h6>
                    <p className='subCategories'>₹ 1500/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={fourWheelerIcon} alt="Image" />
                    <h6 className='categoryName'>Four whe..</h6>
                    <p className='subCategories'>₹ 15000/Pcs</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* 7th row */}
          <Grid item xs={12} sx={{ mb: "50px" }}>
            <div>
              <h6 className='categoryHeading  text-white w-auto'>VEHICLE</h6>
              <Grid container spacing={1} rowSpacing={4}>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={chairIcon} alt="Image" />
                    <h6 className='categoryName'>Chair</h6>
                    <p className='subCategories'>₹ 25/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={ropeIcon} alt="Image" />
                    <h6 className='categoryName'>Rope</h6>
                    <p className='subCategories'>₹ 3/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={wireIcon} alt="Image" />
                    <h6 className='categoryName'>Wire</h6>
                    <p className='subCategories'>₹ 40/kg</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={fishingNetIcon} alt="Image" />
                    <h6 className='categoryName'>Fishing net</h6>
                    <p className='subCategories'>₹ 3/Pcs</p>
                  </div>
                </Grid>
                <Grid item xs={2} className='flex justify-center'>
                  <div className='categoryContainer'>
                    <img className='categoryImage' src={tyreIcon} alt="Image" />
                    <h6 className='categoryName'>Tyre</h6>
                    <p className='subCategories'>₹ 1/Pcs</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default AdminItems
