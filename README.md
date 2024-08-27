# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- <h6 className='categoryName'>PLASTIC</h6>
<p className='subCategories'>Fiber, Hard Plastic, PVC</p>                  
               
<h6 className='categoryName'>METALS</h6>
<p className='subCategories'>Alum channel, Aluminium</p>
                 
<h6 className='categoryName'>MOTOR</h6>
<p className='subCategories'>Engine, Fan, Motor, Pump</p>
               
<h6 className='categoryName'>E WASTE</h6>
<p className='subCategories'>Cooler big, Cooler small</p>
                 
<h6 className='categoryName'>VEHICLE</h6>
<p className='subCategories'>Four wheeler, Two wheeler</p>
                  
<h6 className='categoryName'>OTHERS</h6>
<p className='subCategories'>AC aluminium, AC copper</p> -->


<!-- <Grid item xs={12} >
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
{/* 2nd row */ }
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
{/* 3rd row */ }
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
{/* 4th row */ }
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
{/* 5th row */ }
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
{/* 6th row */ }
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
{/* 7th row */ }
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
      </Grid> -->